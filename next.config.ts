import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com", // ✅ Required for all Unsplash image URLs
    ],
  }
};

export default nextConfig;
