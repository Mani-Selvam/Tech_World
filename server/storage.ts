import {
    attendees,
    enrollments,
    type Attendee,
    type InsertAttendee,
    type Enrollment,
    type InsertEnrollment,
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";
import { nanoid } from "nanoid";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
    createAttendee(attendee: InsertAttendee): Promise<Attendee>;
    getAttendees(): Promise<Attendee[]>;
    createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
    getEnrollments(): Promise<Enrollment[]>;
}

export class MemStorage implements IStorage {
    private attendees: Attendee[] = [];
    private enrollments: Enrollment[] = [];

    async createAttendee(insertAttendee: InsertAttendee): Promise<Attendee> {
        const attendee: Attendee = {
            id: nanoid(),
            ...insertAttendee,
            companyName: insertAttendee.companyName || null,
            registeredAt: new Date(),
        };
        this.attendees.push(attendee);
        return attendee;
    }

    async getAttendees(): Promise<Attendee[]> {
        return [...this.attendees];
    }

    async createEnrollment(
        insertEnrollment: InsertEnrollment
    ): Promise<Enrollment> {
        const enrollment: Enrollment = {
            id: nanoid(),
            ...insertEnrollment,
            blockchainCoding: insertEnrollment.blockchainCoding || null,
            cryptoDefi: insertEnrollment.cryptoDefi || null,
            nftWeb3: insertEnrollment.nftWeb3 || null,
            enrolledAt: new Date(),
        };
        this.enrollments.push(enrollment);
        return enrollment;
    }

    async getEnrollments(): Promise<Enrollment[]> {
        return [...this.enrollments];
    }
}

export class DatabaseStorage implements IStorage {
    constructor(private db: any) {}

    async createAttendee(insertAttendee: InsertAttendee): Promise<Attendee> {
        try {
            await this.db
                .insert(attendees)
                .values(insertAttendee);
            
            // Query back the inserted record since .returning() doesn't work with Neon HTTP
            const inserted = await this.db
                .select()
                .from(attendees)
                .where(eq(attendees.email, insertAttendee.email))
                .orderBy(desc(attendees.registeredAt))
                .limit(1);
            
            if (!inserted || inserted.length === 0) {
                throw new Error("Failed to retrieve created attendee");
            }
            
            return inserted[0];
        } catch (error) {
            console.error("Error in createAttendee:", error);
            throw error;
        }
    }

    async getAttendees(): Promise<Attendee[]> {
        try {
            const result = await this.db.select().from(attendees);
            return result || [];
        } catch (error) {
            console.error("Error in getAttendees:", error);
            return [];
        }
    }

    async createEnrollment(
        insertEnrollment: InsertEnrollment
    ): Promise<Enrollment> {
        try {
            await this.db
                .insert(enrollments)
                .values(insertEnrollment);
            
            // Query back the inserted record since .returning() doesn't work with Neon HTTP
            const inserted = await this.db
                .select()
                .from(enrollments)
                .where(eq(enrollments.email, insertEnrollment.email))
                .orderBy(desc(enrollments.enrolledAt))
                .limit(1);
            
            if (!inserted || inserted.length === 0) {
                throw new Error("Failed to retrieve created enrollment");
            }
            
            return inserted[0];
        } catch (error) {
            console.error("Error in createEnrollment:", error);
            throw error;
        }
    }

    async getEnrollments(): Promise<Enrollment[]> {
        try {
            const result = await this.db.select().from(enrollments);
            return result || [];
        } catch (error) {
            console.error("Error in getEnrollments:", error);
            return [];
        }
    }
}

// Use in-memory storage by default until database is properly configured
// The user can provision a PostgreSQL database through the Replit Database tool
// and the application will automatically use it when DATABASE_URL is available

// Lazy storage initialization to ensure environment variables are loaded first
let storageInstance: IStorage | null = null;
let isInitializing = false;

// Initialize storage based on environment
async function initializeStorage(): Promise<IStorage> {
    if (storageInstance) {
        return storageInstance;
    }

    if (isInitializing) {
        // Wait for initialization to complete
        while (isInitializing) {
            await new Promise((resolve) => setTimeout(resolve, 10));
        }
        return storageInstance!;
    }

    isInitializing = true;

    try {
        console.log("🔍 Environment variables check:");
        console.log("- DATABASE_URL exists:", !!process.env.DATABASE_URL);
        console.log(
            "- DATABASE_URL value:",
            process.env.DATABASE_URL
                ? process.env.DATABASE_URL.substring(0, 50) + "..."
                : "not found"
        );

        if (process.env.DATABASE_URL) {
            const { db } = await import("./db");
            storageInstance = new DatabaseStorage(db);
            console.log("✅ Using DatabaseStorage with Neon database");
        } else {
            storageInstance = new MemStorage();
            console.log("⚠️  Using MemStorage - DATABASE_URL not found");
        }
    } catch (error) {
        console.error("Failed to initialize database storage:", error);
        console.log("⚠️  Falling back to MemStorage");
        storageInstance = new MemStorage();
    } finally {
        isInitializing = false;
    }

    return storageInstance;
}

// Create a proxy that handles lazy initialization
export const storage = new Proxy({} as IStorage, {
    get(target, prop) {
        return async (...args: any[]) => {
            const instance = await initializeStorage();
            return (instance as any)[prop](...args);
        };
    },
});
