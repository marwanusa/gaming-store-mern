import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // or 'http'
        hostname: "static.vecteezy.com", // Replace with your image host's domain
        port: "", // Leave empty if default port, or specify if needed
      },
      // Add more patterns for other external domains if necessary
    ],
  },
};

export default nextConfig;
