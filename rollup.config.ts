import nodeResolve from "@rollup/plugin-node-resolve"
import visualizer from "rollup-plugin-visualizer"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"
import replace from "@rollup/plugin-replace"
import svelte from "rollup-plugin-svelte"
import babel from "@rollup/plugin-babel"
import { RollupOptions } from "rollup"
import size from "rollup-plugin-size"
import dts from "rollup-plugin-dts"
import path from "path"
type Options = {
  input: string
  packageDir: string
  external: RollupOptions["external"]
  banner: string
  jsName: string
  outputFile: string
  globals: Record<string, string>
}

const umdDevPlugin = (type: "development" | "production") =>
  replace({
    "process.env.NODE_ENV": `"${type}"`,
    delimiters: ["", ""],
    preventAssignment: true,
  })

const babelPlugin = babel({
  babelHelpers: "bundled",
  exclude: /node_modules/,
  extensions: [".ts", ".tsx"],
})

export default function rollup(options: RollupOptions): RollupOptions[] {
  return [
    ...buildConfigs({
      name: "js-sdk",
      packageDir: "packages/js-sdk",
      jsName: "JsSDK",
      outputFile: "js-sdk",
      entryFile: "src/index.ts",
      globals: {},
    }),
    ...buildConfigs({
      name: "react-sdk",
      packageDir: "packages/react-sdk",
      jsName: "ReactSDK",
      outputFile: "react-sdk",
      entryFile: "src/index.tsx",
      globals: {
        react: "React",
      },
    }),
  ]
}

function buildConfigs(opts: {
  packageDir: string
  name: string
  jsName: string
  outputFile: string
  entryFile: string
  globals: Record<string, string>
}): RollupOptions[] {
  const input = path.resolve(opts.packageDir, opts.entryFile)
  const externalDeps = Object.keys(opts.globals)

  const external = (moduleName) => externalDeps.includes(moduleName)
  const banner = createBanner(opts.name)

  const options: Options = {
    input,
    jsName: opts.jsName,
    outputFile: opts.outputFile,
    packageDir: opts.packageDir,
    external,
    banner,
    globals: opts.globals,
  }

  return [
    esm(options),
    cjs(options),
    umdDev(options),
    umdProd(options),
    types(options),
  ]
}

function esm({ input, packageDir, external, banner }: Options): RollupOptions {
  return {
    // ESM
    external,
    input,
    output: {
      format: "esm",
      sourcemap: true,
      dir: `${packageDir}/build/esm`,
      banner,
    },
    plugins: [
      // svelte({
      //   compilerOptions: {
      //     hydratable: true,
      //   },
      // }),
      commonjs(),
      babelPlugin,
      nodeResolve({ extensions: [".ts", ".tsx"] }),
    ],
  }
}

function cjs({ input, external, packageDir, banner }: Options): RollupOptions {
  return {
    // CJS
    external,
    input,
    output: {
      format: "cjs",
      sourcemap: true,
      dir: `${packageDir}/build/cjs`,
      preserveModules: true,
      exports: "named",
      banner,
    },
    plugins: [
      svelte(),
      commonjs(),
      babelPlugin,
      nodeResolve({ extensions: [".ts", ".tsx"] }),
    ],
  }
}

function umdDev({
  input,
  external,
  packageDir,
  outputFile,
  globals,
  banner,
  jsName,
}: Options): RollupOptions {
  return {
    // UMD (Dev)
    external,
    input,
    output: {
      format: "umd",
      sourcemap: true,
      file: `${packageDir}/build/umd/index.development.js`,
      name: jsName,
      globals,
      banner,
    },
    plugins: [
      svelte(),
      commonjs(),
      babelPlugin,
      nodeResolve({ extensions: [".ts", ".tsx"] }),
      umdDevPlugin("development"),
    ],
  }
}

function umdProd({
  input,
  external,
  packageDir,
  outputFile,
  globals,
  banner,
  jsName,
}: Options): RollupOptions {
  return {
    // UMD (Prod)
    external,
    input,
    output: {
      format: "umd",
      sourcemap: true,
      file: `${packageDir}/build/umd/index.production.js`,
      name: jsName,
      globals,
      banner,
    },
    plugins: [
      svelte(),
      babelPlugin,
      commonjs(),
      nodeResolve({ extensions: [".ts", ".tsx"] }),
      umdDevPlugin("production"),
      terser({
        mangle: true,
        compress: true,
      }),
      size({}),
      visualizer({
        filename: `${packageDir}/build/stats-html.html`,
        gzipSize: true,
      }),
      visualizer({
        filename: `${packageDir}/build/stats-react.json`,
        json: true,
        gzipSize: true,
      }),
    ],
  }
}

function types({
  input,
  packageDir,
  external,
  banner,
}: Options): RollupOptions {
  return {
    // TYPES
    external,
    input,
    output: {
      format: "es",
      file: `${packageDir}/build/types/index.d.ts`,
      banner,
    },
    plugins: [dts()],
  }
}

function createBanner(libraryName: string) {
  return `/**
 * ${libraryName}
 *
 * Copyright (c) Everfund
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */`
}
