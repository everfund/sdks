import rollupReplace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
    }),
    react(),
  ],
  resolve: process.env.USE_SOURCE
    ? {
        alias: {
          'react-sdk': path.resolve(
            __dirname,
            '../../libs/react-sdk/src/index.ts'
          ),
        },
      }
    : {},
});
