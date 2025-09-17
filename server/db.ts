import dotenv from "dotenv";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { Agent, setGlobalDispatcher } from "undici";
import * as schema from "@shared/schema";

dotenv.config();

// Fix TLS certificate issues in Replit dev environment only
if (process.env.REPL_ID) {
    setGlobalDispatcher(new Agent({ connect: { rejectUnauthorized: false } }));
}

if (!process.env.DATABASE_URL) {
    throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?"
    );
}

neonConfig.fetchConnectionCache = true; // optional performance optimization
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
