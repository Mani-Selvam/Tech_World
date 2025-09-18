import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
    id: varchar("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});

export const attendees = pgTable("attendees", {
    id: varchar("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    name: text("name").notNull(),
    email: text("email").notNull(),
    mobile: text("mobile").notNull(),
    companyName: text("company_name"),
    registeredAt: timestamp("registered_at")
        .notNull()
        .default(sql`now()`),
});

export const insertUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
});

export const insertAttendeeSchema = createInsertSchema(attendees).omit({
    id: true,
    registeredAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertAttendee = z.infer<typeof insertAttendeeSchema>;
export type Attendee = typeof attendees.$inferSelect;

