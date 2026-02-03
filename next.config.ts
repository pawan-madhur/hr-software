import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hrone.cloud",
      },
      {
        protocol: "https",
        hostname: "content.hrone.cloud",
      },
    ],
  },
};

export default nextConfig;
