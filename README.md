<p align="center">
  <a href="https://www.everfund.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://ik.imagekit.io/everfund/everfund-dark?tr=w-350">
      <img alt="logo" src="https://ik.imagekit.io/everfund/everfund-light?tr=w-350">
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://docs.everfund.com">
    <img alt="Everfund Docs" src="https://img.shields.io/badge/everfund-docs-blue.svg?&l&style=for-the-badge" />
  </a>
  <a href="https://github.com/everfund/everfund/actions">
    <img alt="Github Action Test Status"src="https://img.shields.io/github/actions/workflow/status/everfund/everfund/tests.yml?style=for-the-badge&logo=github">
  </a>
  <a href="https://bundlephobia.com/package/@everfund/js-sdk">
    <img alt="" src="https://img.shields.io/bundlephobia/min/%40everfund%2Fjs-sdk?style=for-the-badge&color=green">
  </a>
  <a href="https://github.com/everfund/everfund/actions">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/stars/everfund/everfund?style=for-the-badge&color=orange&logo=github">
  </a>
  <a href="https://x.com/everfund">
    <img alt="Follow on X" src="https://img.shields.io/badge/follow-__everfund-blue?style=for-the-badge&logo=twitter">
  </a>
</p>

## Documentation and Usage

For how to get started with Everfund, you can refer to the official [documentation page](https://docs.everfund.com).

For JavaScript environments/platforms that Everfund supports, there should be a specific package corresponding to the respective technology.

```sh
pnpm i @everfund/js-sdk
# or
yarn add @everfund/js-sdk
# or
npm install @everfund/js-sdk
```

## Packages

For package specific details on installation, architecture and usage usage, you can refer to the package's README file.

- [`@everfund/js-sdk`](./packages/js-sdk): Functionalities regarded as "core" for Everfund to operate with. _Authentication resolution, API Resources etc._
- [`@everfund/react-sdk`](./packages/react-sdk) Everfund package for React applications.

Additionally there are packages which act as shared utilities or building blocks.

## Setup

- Clone the repository.
- `pnpm install`.
- `pnpm build`.

\* See the [docs folder](./docs) for additional repository documentation.
