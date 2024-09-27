/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        };
      }
  
      // Ignore fastq and parallax-controller test files
      config.module.rules.push({
        test: /node_modules\/(fastq|parallax-controller)\/.*\.(test|spec)\.ts$/,
        loader: 'ignore-loader',
      });
  
      return config;
    },
  }
  
  module.exports = nextConfig