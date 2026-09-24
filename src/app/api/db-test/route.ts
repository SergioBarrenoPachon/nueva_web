import { NextResponse } from 'next/server';
import { testDbConnection } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const result = await testDbConnection();
    return NextResponse.json({
      status: 'ok',
      message: 'Successfully connected to PostgreSQL (Neon)',
      environment: process.env.NODE_ENV,
      configSource: result.source,
      latencyMs: result.durationMs,
      database: result.data,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown database error';
    return NextResponse.json(
      {
        status: 'error',
        message: 'Failed to connect to PostgreSQL database',
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
