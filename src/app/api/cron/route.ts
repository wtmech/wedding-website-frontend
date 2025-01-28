import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error('API URL not configured');
    }

    console.log('Cron: Warming up server...');
    const startTime = Date.now();

    const response = await fetch(apiUrl, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to warm up server: ${response.status}`);
    }

    const endTime = Date.now();
    console.log(`Cron: Server warmed up in ${endTime - startTime}ms`);

    return NextResponse.json({
      success: true,
      message: `Server warmed up in ${endTime - startTime}ms`
    });
  } catch (error) {
    console.error('Cron: Server warmup failed:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}