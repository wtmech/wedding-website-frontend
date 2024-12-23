import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_BLOB_DOMAIN].filter(Boolean) as string[],
  }
};

export default nextConfig;
