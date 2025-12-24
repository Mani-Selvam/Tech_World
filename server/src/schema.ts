import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

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

export const enrollments = pgTable("enrollments", {
    id: varchar("id")
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    fullName: text("full_name").notNull(),
    mobile: text("mobile").notNull(),
    email: text("email").notNull(),
    city: text("city").notNull(),
    ageGroup: text("age_group").notNull(),
    currentRole: text("current_role").notNull(),
    blockchainCoding: text("blockchain_coding"),
    cryptoDefi: text("crypto_defi"),
    nftWeb3: text("nft_web3"),
    preferredMode: text("preferred_mode").notNull(),
    preferredTiming: text("preferred_timing").notNull(),
    hearAboutUs: text("hear_about_us").notNull(),
    whyLearn: text("why_learn").notNull(),
    enrolledAt: timestamp("enrolled_at")
        .notNull()
        .default(sql`now()`),
});

export const insertAttendeeSchema = createInsertSchema(attendees).omit({
    id: true,
    registeredAt: true,
});

export type Attendee = typeof attendees.$inferSelect;
export type Enrollment = typeof enrollments.$inferSelect;
