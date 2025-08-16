import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'akazellapp.netlify.app',
        port: '',
        pathname: '/**',
      },
    ],
  }
  
};

export default nextConfig;
