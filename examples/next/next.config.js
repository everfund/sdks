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
            // uses dist instead of TS Files as webpack
            // has struggles bundling tsx
            '@everfund/react-sdk': path.resolve(
              __dirname,
              '../../packages/react-sdk/dist/react-sdk.mjs'
            ),
          }
        : { ...config.resolve.alias };

    return config;
  },
};

module.exports = nextConfig;
