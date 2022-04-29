// rollup.config.js
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import { terser } from "rollup-plugin-terser"
import { uglify } from "rollup-plugin-uglify"
import typescript from "@rollup/plugin-typescript"

const config = {
  input: "src/donationWidget.ts",
  output: {
    format: "umd",
    name: "Everfund",
    file: "dist/js-sdk.umd.js",
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    typescript(),
    resolve({ browser: true }),
    terser(),
    uglify(),
  ],
}

export default config
