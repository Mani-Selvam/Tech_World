import { users, attendees, enrollments, type User, type InsertUser, type Attendee, type InsertAttendee, type Enrollment, type InsertEnrollment } from "@shared/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAttendee(attendee: InsertAttendee): Promise<Attendee>;
  getAttendees(): Promise<Attendee[]>;
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
  getEnrollments(): Promise<Enrollment[]>;
}

export class MemStorage implements IStorage {
  private users: User[] = [];
  private attendees: Attendee[] = [];
  private enrollments: Enrollment[] = [];

  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: nanoid(),
      ...insertUser,
    };
    this.users.push(user);
    return user;
  }

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

  async createEnrollment(insertEnrollment: InsertEnrollment): Promise<Enrollment> {
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

  async getUser(id: string): Promise<User | undefined> {
    const [user] = await this.db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await this.db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await this.db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createAttendee(insertAttendee: InsertAttendee): Promise<Attendee> {
    const [attendee] = await this.db
      .insert(attendees)
      .values(insertAttendee)
      .returning();
    return attendee;
  }

  async getAttendees(): Promise<Attendee[]> {
    return await this.db.select().from(attendees);
  }

  async createEnrollment(insertEnrollment: InsertEnrollment): Promise<Enrollment> {
    const [enrollment] = await this.db
      .insert(enrollments)
      .values(insertEnrollment)
      .returning();
    return enrollment;
  }

  async getEnrollments(): Promise<Enrollment[]> {
    return await this.db.select().from(enrollments);
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
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    return storageInstance!;
  }

  isInitializing = true;

  try {
    console.log("🔍 Environment variables check:");
    console.log("- DATABASE_URL exists:", !!process.env.DATABASE_URL);
    console.log("- DATABASE_URL value:", process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 50) + "..." : "not found");

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
  }
});