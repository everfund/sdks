import pkg from "./package.json"
import commonjs from "@rollup/plugin-commonjs"
import gzipPlugin from "rollup-plugin-gzip"
import resolve from "rollup-plugin-node-resolve"
import external from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import typescript from "rollup-plugin-typescript2"
import { uglify } from "rollup-plugin-uglify"
import { brotliCompressSync } from "zlib"

const plugins = [
  external(),
  postcss({
    extract: true,
    modules: true,
    minimize: true,
  }),
  resolve(),
  typescript({
    rollupCommonJSResolveHack: true,
    exclude: "**/__tests__/**",
    clean: true,
  }),
  commonjs({
    include: ["node_modules/**"],
  }),
  uglify(),
  gzipPlugin(),
  gzipPlugin({
    customCompression: (content) => brotliCompressSync(Buffer.from(content)),
    fileName: ".br",
  }),
]

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "umd",
        sourcemap: true,
        name: "Everfund",
      },
    ],
    plugins,
  },
  {
    input: "src/modal.ts",
    output: [
      {
        file: "dist/m.js",
        format: "umd",
        sourcemap: true,
        name: "Everfund",
      },
    ],
    plugins,
  },
]