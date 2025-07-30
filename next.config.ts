import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  
  // Enable static optimization
  generateEtags: false,
  
  // Customize webpack for better optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure splitChunks exists and is an object
      if (!config.optimization.splitChunks || typeof config.optimization.splitChunks === 'boolean') {
        config.optimization.splitChunks = {};
      }
      config.optimization.splitChunks.chunks = 'all';
    }
    return config;
  },
};

export default nextConfig;
