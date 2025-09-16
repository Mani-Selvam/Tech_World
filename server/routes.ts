import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAttendeeSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      const result = insertAttendeeSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: fromZodError(result.error).toString() 
        });
      }

      const attendee = await storage.createAttendee(result.data);
      
      res.status(201).json({ 
        success: true, 
        message: "Registration successful!",
        attendee: {
          id: attendee.id,
          name: attendee.name,
          email: attendee.email
        }
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to register attendee" 
      });
    }
  });

  // Get all attendees endpoint (for admin use)
  app.get("/api/attendees", async (req, res) => {
    try {
      const attendees = await storage.getAttendees();
      res.json({ attendees });
    } catch (error) {
      console.error("Error fetching attendees:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to fetch attendees" 
      });
    }
  });

  // Database test endpoint
  app.get("/api/test-db", async (req, res) => {
    try {
      const { db } = await import("./db");
      const { sql } = await import("drizzle-orm");
      const result = await db.execute(sql`SELECT NOW() as current_time`);
      res.json({ 
        success: true, 
        connection: "Database connected successfully",
        time: result.rows?.[0]?.current_time
      });
    } catch (error) {
      console.error("Database test error:", error);
      res.status(500).json({ 
        error: "Database connection failed", 
        message: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
