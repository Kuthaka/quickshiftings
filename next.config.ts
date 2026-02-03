import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly enable SWC minification (default in Next.js 13+)
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },

  // Optimization: Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance: Ensure compression is enabled
  compress: true,

  // Performance: Disable production source maps which can be flagged as unminified code
  productionBrowserSourceMaps: false,
};

export default nextConfig;
