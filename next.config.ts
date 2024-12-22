import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: [
      'pjih39zmuzg7tml8.public.blob.vercel-storage.com'
    ],
  }
};

export default nextConfig;
