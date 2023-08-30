import rollupReplace from '@rollup/plugin-replace';
import vue from '@vitejs/plugin-vue';
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
    vue(),
  ],
  resolve: process.env.USE_SOURCE
    ? {
        alias: {
          '@everfund/js-sdk': path.resolve(
            __dirname,
            '../../packages/js-sdk/src/index.ts'
          ),
        },
      }
    : {
        alias: {},
      },
});
