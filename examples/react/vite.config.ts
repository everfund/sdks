import rollupReplace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'path';

console.log(process.env.USE_SOURCE, process.env.USE_SOURCE === 'true');

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
            '@everfund/js-sdk': path.resolve(
              __dirname,
              '../../packages/js-sdk/src/index.ts'
            ),
            '@everfund/react-sdk': path.resolve(
              __dirname,
              '../../packages/react-sdk/src/index.tsx'
            ),
            '@everfund/example-css': path.resolve(
              __dirname,
              '../../configs/example-css/example-css.css'
            ),
          },
        }
      : {
          alias: {
            '@everfund/example-css': path.resolve(
              __dirname,
              '../../configs/example-css/example-css.css'
            ),
          },
        },
});
