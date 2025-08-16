import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "another-example.com",
        port: "",
        pathname: "/assets/**",
      },
    ],
  }
  
};

export default nextConfig;
