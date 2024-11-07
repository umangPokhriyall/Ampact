import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.digitalsilk.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  // Add other config options if needed
};

export default nextConfig;
