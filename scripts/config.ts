import { BranchConfig, Package } from "./types"
import path from "path"

// TODO: List your npm packages here. The first package will be used as the versioner.
export const packages: Package[] = [
  {
    name: "@everfund/js-sdk",
    packageDir: "js-sdk",
    srcDir: "src",
  },
  {
    name: "@everfund/react-sdk",
    packageDir: "react-sdk",
    srcDir: "src",
    dependencies: ["@everfund/js-sdk"],
  },
]

export const latestBranch = "main"

export const branchConfigs: Record<string, BranchConfig> = {
  main: {
    prerelease: false,
    ghRelease: true,
  },
  next: {
    prerelease: true,
    ghRelease: true,
  },
  beta: {
    prerelease: true,
    ghRelease: true,
  },
  alpha: {
    prerelease: true,
    ghRelease: true,
  },
}

export const rootDir = path.resolve(__dirname, "..")
export const examplesDirs = [
  "examples/react",
  "examples/svelte",
  "examples/vue",
  "examples/vanilla-js",
]
