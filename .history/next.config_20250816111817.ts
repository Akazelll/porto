import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    {
        protocol: 'https',
        hostname: 'akazellapp.netlify.app',
        port: '',
        pathname: '/**',
      },
  }
  
};

export default nextConfig;
