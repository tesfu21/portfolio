// lib/db.ts — PostgreSQL client (Supabase / any Postgres)
// Uses the native `pg` package. Install it: npm install pg @types/pg

import { Pool } from "pg";

// Re-use connection pool across hot-reloads in development
declare global {
  // eslint-disable-next-line no-var
  var _pgPool: Pool | undefined;
}

function createPool(): Pool {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      "DATABASE_URL is not set. Add it to your .env.local file.\n" +
        "Get it from: Supabase → Project → Settings → Database → Connection string (URI)"
    );
  }

  return new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });
}

// In development, reuse the pool between hot-reloads (avoids exhausting connections)
const pool: Pool =
  process.env.NODE_ENV === "development"
    ? (global._pgPool ?? (global._pgPool = createPool()))
    : createPool();

export default pool;

// ── Helper: run a query ───────────────────────────────────────────
// Usage:
//   import query from "@/lib/db";
//   const result = await query("SELECT * FROM projects WHERE id = $1", [id]);
export async function query<T = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T[]> {
  const res = await pool.query(text, params);
  return res.rows as T[];
}

// ── SQL setup (run once in Supabase SQL editor) ───────────────────
// CREATE TABLE projects (
//   id          SERIAL PRIMARY KEY,
//   title       VARCHAR(100)  NOT NULL,
//   description TEXT          NOT NULL,
//   tech_stack  TEXT[]        NOT NULL DEFAULT '{}',
//   is_public   BOOLEAN       NOT NULL DEFAULT true,
//   demo_url    TEXT,
//   github_url  TEXT,
//   created_at  TIMESTAMP     DEFAULT NOW()
// );
//
// CREATE TABLE messages (
//   id         SERIAL PRIMARY KEY,
//   name       VARCHAR(100) NOT NULL,
//   email      VARCHAR(100) NOT NULL,
//   message    TEXT         NOT NULL,
//   sent_at    TIMESTAMP    DEFAULT NOW()
// );
