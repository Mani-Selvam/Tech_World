import { users, attendees, type User, type InsertUser, type Attendee, type InsertAttendee } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAttendee(attendee: InsertAttendee): Promise<Attendee>;
  getAttendees(): Promise<Attendee[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createAttendee(insertAttendee: InsertAttendee): Promise<Attendee> {
    const [attendee] = await db
      .insert(attendees)
      .values(insertAttendee)
      .returning();
    return attendee;
  }

  async getAttendees(): Promise<Attendee[]> {
    return await db.select().from(attendees);
  }
}

export const storage = new DatabaseStorage();
