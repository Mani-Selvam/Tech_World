import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAttendeeSchema, insertEnrollmentSchema } from "@shared/schema";
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

  // Enrollment endpoint
  app.post("/api/enroll", async (req, res) => {
    try {
      const result = insertEnrollmentSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: "Validation failed", 
          details: fromZodError(result.error).toString() 
        });
      }

      const enrollment = await storage.createEnrollment(result.data);
      
      res.status(201).json({ 
        success: true, 
        message: "Enrollment successful!",
        enrollment: {
          id: enrollment.id,
          fullName: enrollment.fullName,
          email: enrollment.email
        }
      });
    } catch (error) {
      console.error("Enrollment error:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to process enrollment" 
      });
    }
  });

  // Get all enrollments endpoint (for admin use only - requires admin key)
  app.get("/api/enrollments", async (req, res) => {
    try {
      // Basic admin protection - require admin key in header
      const adminKey = req.headers['x-admin-key'];
      if (!adminKey || adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({ 
          error: "Unauthorized", 
          message: "Admin access required" 
        });
      }

      const enrollments = await storage.getEnrollments();
      res.json({ enrollments });
    } catch (error) {
      console.error("Error fetching enrollments:", error);
      res.status(500).json({ 
        error: "Internal server error", 
        message: "Failed to fetch enrollments" 
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
