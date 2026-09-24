import { neon, neonConfig } from '@neondatabase/serverless';

// Default fallback connection string for local development
const LOCAL_FALLBACK_DB_URL =
  'postgresql://neondb_owner:npg_kvTD8GCPyE7Z@ep-quiet-surf-b1y6uhuo-pooler.c-5.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// Neon database connection string: reads DATABASE_URL environment variable (Render / .env.local) or falls back to local URL
export const getDatabaseUrl = (): string => {
  return process.env.DATABASE_URL || LOCAL_FALLBACK_DB_URL;
};

// Singleton instance of the Neon serverless SQL client
const dbUrl = getDatabaseUrl();
export const sql = neon(dbUrl);

/**
 * Execute standard SQL queries with parameterized values
 * @param queryText SQL query string (use $1, $2 for parameters)
 * @param params Array of parameter values
 */
export async function query<T = Record<string, unknown>>(
  queryText: string,
  params?: unknown[]
): Promise<T[]> {
  const result = await (sql as unknown as { query: (q: string, p?: unknown[]) => Promise<T[]> }).query(
    queryText,
    params
  );
  return result;
}

/**
 * Utility to verify database connectivity and retrieve basic metadata
 */
export async function testDbConnection() {
  const startTime = Date.now();
  const rows = await sql`
    SELECT 
      NOW() as current_time,
      current_database() as database_name,
      version() as pg_version
  `;
  const durationMs = Date.now() - startTime;

  return {
    connected: true,
    durationMs,
    data: rows[0],
    source: process.env.DATABASE_URL ? 'environment_variable' : 'fallback_local',
  };
}
