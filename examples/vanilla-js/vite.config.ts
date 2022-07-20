import rollupReplace from "@rollup/plugin-replace"
import { defineConfig } from "vite"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    }),
  ],
  resolve: {
    alias: {
      "js-sdk": path.resolve(__dirname, "../../libs/js-sdk/src/index.ts"),
    },
  },
})
