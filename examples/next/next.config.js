var path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias =
      process.env.USE_SOURCE === 'true'
        ? {
            ...config.resolve.alias,
            'js-sdk': path.resolve(
              __dirname,
              '../../packages/js-sdk/src/index.ts'
            ),
            'react-sdk': path.resolve(
              __dirname,
              '../../packages/react-sdk/src/index.ts'
            ),
          }
        : { ...config.resolve.alias };

    return config;
  },
};

module.exports = nextConfig;
