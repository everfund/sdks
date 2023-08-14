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
  <a href="https://bundlephobia.com/package/@everfund/react-sdk">
    <img alt="" src="https://img.shields.io/bundlephobia/min/%40everfund%2Freact-sdk?style=for-the-badge&color=green">
  </a>
  <a href="https://github.com/everfund/everfund/actions">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/stars/everfund/everfund?style=for-the-badge&color=orange&logo=github">
  </a>
  <a href="https://x.com/everfund">
    <img alt="Follow on X" src="https://img.shields.io/badge/follow-__everfund-blue?style=for-the-badge&logo=twitter">
  </a>
</p>

<h3 align="center">@everfund/react-sdk</h3>

<div align="center">

[Changelog](https://github.com/everfund/everfund/blob/main/everfund/everfund/CHANGELOG.md)
·
[Report a Bug](https://github.com/everfund/everfund/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug%3A+)
·
[Request a Feature](https://github.com/everfund/everfund/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=Feature%3A+)
·
[Ask a Question](https://github.com/everfund/everfund/issues/new?assignees=&labels=question&template=ask_a_question.md&title=Support%3A+)

</div>

---

## Overview

Our React library that builds on top of the js-sdk. It provides React components for checkout forms, donor profiles, and more to seamlessly integrate Everfund into your React applications

## Getting Started

### Installation

There are two ways you can include `@everfund/react-sdk` in your project. You can either [import the @everfund/react-sdk npm module](#install-everfund/react-sdk-as-es-module) or [load @everfund/react-sdk with a script tag](#Install-@everfund/react-sdk--as-script).

### Install `everfund/react-sdk`

```sh
pnpm i @everfund/react-sdk
# or
yarn add @everfund/react-sdk
# or
npm install @everfund/react-sdk
```

## Usage Checkout Modal

```jsx
import { useDonationCheckoutModal } from '@everfund/react-sdk'
import { useState } from 'react'

export const DonateNow = () => {
  const { openModal } = useDonationCheckoutModal({
    code: 'demo',
  })

  return (
    <button className="button" onClick={() => openModal()}>
      Donate Now
    </button>
  )
}
```

## Usage Donation Form

```jsx
import { DonationForm } from '@everfund/react-sdk'

export const App = () => (<div>
  <div>Some content</div>
  <div>
    <DonationForm code="demo" />
  </div>
</div>)
```

_For further details and examples, please refer to our [Documentation](https://docs.everfund.com)._

### Build

To build the package locally with `tsup`, run:

```sh
pnpm build
```

## Contributing

At Everfund, we strive to create an inclusive and welcoming environment for all contributors.

To ensure a productive and respectful experience for everyone involved, we have established a few ground rules.

Please review our [Code of Conduct](https://github.com/everfund/everfund/blob/CODE_OF_CONDUCT.md) before getting started.

If you're new to the project, you may want to start with one of our designated ["good first issues"](https://github.com/everfund/everfund/issues?q=is%3Aissue+is%3Aopen+label%3A%22Good+First+Issue%22) These issues are specifically chosen to be accessible and easy to understand, making them a great introduction to the project.

Together, let's build something amazing!

## Security

`@everfund/react-sdk` follows good practices of security, but 100% security cannot be assured.

`@everfund/react-sdk` is provided **"as is"** without any **warranty**. Use at your own risk.

_For more information and to report security issues, please refer to our [security documentation](https://github.com/everfund/everfund/blob/main/SECURITY.md)._

## License

This project is licensed under the **MIT license**.

See [LICENSE](https://github.com/everfund/everfund/blob/main/LICENCE.md) for more information.
