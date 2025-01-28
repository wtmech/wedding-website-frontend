async function warmupServer() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error('API URL not configured');
    }

    console.log('Warming up server...');
    const startTime = Date.now();

    const response = await fetch(apiUrl, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    if (!response.ok) {
      throw new Error(`Failed to warm up server: ${response.status}`);
    }

    const endTime = Date.now();
    console.log(`Server warmed up in ${endTime - startTime}ms`);
  } catch (error) {
    console.error('Server warmup failed:', error);
  }
}

export default async function ServerWarmup() {
  await warmupServer();
  return null; // This component doesn't render anything
}