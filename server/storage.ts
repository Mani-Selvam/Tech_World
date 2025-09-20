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
export const storage = new MemStorage();