import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
    plugins: [
        react(),
        runtimeErrorOverlay(),
        ...(process.env.NODE_ENV !== "production" &&
        process.env.REPL_ID !== undefined
            ? [
                  await import("@replit/vite-plugin-cartographer").then((m) =>
                      m.cartographer()
                  ),
                  await import("@replit/vite-plugin-dev-banner").then((m) =>
                      m.devBanner()
                  ),
              ]
            : []),
    ],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "client", "src"),
            "@shared": path.resolve(import.meta.dirname, "shared"),
            "@assets": path.resolve(import.meta.dirname, "attached_assets"),
        },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
        outDir: path.resolve(import.meta.dirname, "dist/public"),
        emptyOutDir: true,
        minify: 'terser',
        cssMinify: true,
        cssCodeSplit: true,
        target: 'esnext',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info'],
                passes: 2,
            },
            mangle: {
                safari10: true,
            },
            format: {
                comments: false,
            },
        },
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        if (id.includes('react') || id.includes('react-dom') || id.includes('wouter')) {
                            return 'react-vendor';
                        }
                        if (id.includes('framer-motion')) {
                            return 'framer-vendor';
                        }
                        if (id.includes('recharts') || id.includes('d3-')) {
                            return 'charts-vendor';
                        }
                        if (id.includes('lucide-react')) {
                            return 'icons-vendor';
                        }
                        if (id.includes('@tanstack/react-query')) {
                            return 'query-vendor';
                        }
                        if (id.includes('@radix-ui')) {
                            return 'ui-vendor';
                        }
                        return 'vendor';
                    }
                },
                assetFileNames: (assetInfo) => {
                    if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
                    if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(assetInfo.name)) {
                        return `assets/images/[name]-[hash][extname]`;
                    }
                    if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
                        return `assets/fonts/[name]-[hash][extname]`;
                    }
                    return `assets/[name]-[hash][extname]`;
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
            treeshake: {
                moduleSideEffects: false,
                propertyReadSideEffects: false,
            },
        },
        chunkSizeWarningLimit: 600,
        sourcemap: false,
        assetsInlineLimit: 4096,
        reportCompressedSize: false,
    },
    server: {
        fs: {
            strict: true,
            deny: ["**/.*"],
        },
    },
});
