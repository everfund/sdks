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
            '@everfund/example-css': path.resolve(
              __dirname,
              '../../configs/example-css/example-css.css'
            ),
          }
        : {
            '@everfund/example-css': path.resolve(
              __dirname,
              '../../configs/example-css/example-css.css'
            ),
          };

    return config;
  },
};

module.exports = nextConfig;
