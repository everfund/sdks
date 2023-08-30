import rollupReplace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //@ts-ignore
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        'process.env.NODE_ENV': JSON.stringify('development'),
      },
    }),
    react(),
  ],
  resolve:
    process.env.USE_SOURCE === 'true'
      ? {
          alias: {
            '@everfund/react-sdk': path.resolve(
              __dirname,
              '../../packages/react-sdk/src/index.tsx'
            ),
          },
        }
      : {
          alias: {},
        },
});
