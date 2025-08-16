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
  plugins: [require("tailwindcss-animate")],
};

export default nextConfig;
