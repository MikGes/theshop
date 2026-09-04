import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "172.26.48.1",
    "localhost:3000",
    "*.ngrok-free.dev",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
       {
        protocol: "https",
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
};

export default nextConfig;