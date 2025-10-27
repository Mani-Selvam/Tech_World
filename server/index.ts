// Load environment variables FIRST before any other imports
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import dotenv from "dotenv";
const envPath = join(__dirname, "..", ".env");
dotenv.config({ path: envPath });

// Now load other modules after environment is set up

import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

app.use(compression());

// Security headers middleware
app.use((req, res, next) => {
    // Content Security Policy - allow WebSocket for Vite HMR in development
    const connectSrc = process.env.NODE_ENV === 'development' 
        ? "'self' https://wa.me ws: wss:" 
        : "'self' https://wa.me";
    
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; " +
        `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; ` +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: blob: https: https://storage.googleapis.com https://ik.imagekit.io; " +
        `connect-src ${connectSrc}; ` +
        "frame-ancestors 'self'"
    );
    
    // HTTP Strict Transport Security (HSTS) - only in production
    if (process.env.NODE_ENV === 'production') {
        res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }
    
    // Cross-Origin Opener Policy
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    
    // X-Frame-Options for clickjacking protection
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    
    // X-Content-Type-Options
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    // Referrer Policy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Permissions Policy
    res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp)$/)) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else if (req.url.includes('/assets/')) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        }
    } else {
        res.setHeader('Cache-Control', 'no-store, must-revalidate');
    }
    next();
});

app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, any> | undefined = undefined;

    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
        capturedJsonResponse = bodyJson;
        return originalResJson.apply(res, [bodyJson, ...args]);
    };

    res.on("finish", () => {
        const duration = Date.now() - start;
        if (path.startsWith("/api")) {
            let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
            if (capturedJsonResponse) {
                logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
            }

            if (logLine.length > 80) {
                logLine = logLine.slice(0, 79) + "…";
            }

            log(logLine);
        }
    });

    next();
});

(async () => {
    const server = await registerRoutes(app);

    // Add API-only 404 handler to prevent Vite from handling /api requests
    app.use("/api", (_req, res) =>
        res.status(404).json({ message: "Not found" })
    );

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";

        res.status(status).json({ message });
        throw err;
    });

    // importantly only setup vite in development and after
    // setting up all the other routes so the catch-all route
    // doesn't interfere with the other routes
    if (app.get("env") === "development") {
        await setupVite(app, server);
    } else {
        serveStatic(app);
    }

    // ALWAYS serve the app on the port specified in the environment variable PORT
    // Other ports are firewalled. Default to 5000 if not specified.
    // this serves both the API and the client.
    // It is the only port that is not firewalled.
    const port = parseInt(process.env.PORT || "5000", 10);
    const isWindows = process.platform === "win32";

    const listenOptions = {
        port,
        host: "0.0.0.0",
        ...(isWindows ? {} : { reusePort: true }),
    };

    server.listen(listenOptions, () => {
        log(`serving on port ${port}`);
    });
})();
