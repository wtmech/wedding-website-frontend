import axios from 'axios';

export const warmupServer = async () => {
  try {
    console.log('Warming up server...');
    const startTime = Date.now();

    // Ping the root endpoint of your backend
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);

    const endTime = Date.now();
    console.log(`Server warmed up in ${endTime - startTime}ms`);
  } catch (error) {
    // Silently fail - we don't want to affect the user experience
    console.log('Warmup request failed:', error);
  }
};
