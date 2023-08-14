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
    <img alt="Github Action Test Status"src="https://img.shields.io/github/actions/workflow/status/everfund/everfund/ci.yml?style=for-the-badge&logo=github">
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

<h3 align="center">@everfund/js-sdk</h3>

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

Our core JavaScript library for building modern donation experiences. It provides components like checkout forms, subscription management, and donor profiles to help developers quickly integrate donation functionality into nonprofit websites and applications.

## Getting Started

### Installation

There are two ways you can include `@everfund/js-sdk` in your project. You can either [import the @everfund/js-sdk npm module](#install-everfund/js-sdk-as-es-module) or [load @everfund/js-sdk with a script tag](#Install-@everfund/js-sdk--as-script).

### Install `everfund/js-sdk` as ES module

```sh
pnpm i @everfund/js-sdk
# or
yarn add @everfund/js-sdk
# or
npm install @everfund/js-sdk
```

```js
import everfund from '@everfund/js-sdk';

document?.getElementById('donate-modal')?.addEventListener('click', () => {
  console.log('launch Everfund Modal');
  everfund.donationWidget({
    code: '078f',
    onSuccess: function (onSuccessPayload) {
      console.log(onSuccessPayload);
    },
    onFailure: function (error) {
      console.log(error);
    },
    onClose: function () {
      //
      console.log('Closed Modal');
    },
  });
});
```

### Install `@everfund/js-sdk` as script

Add the following script to your site's `<body>` element:

```html
<script>
  {
    !(function (w, d, i, s) {
      function l() {
        if (!d.getElementById(i)) {
          var f = d.getElementsByTagName(s)[0],
            e = d.createElement(s);
          (e.type = 'text/javascript'),
            (e.async = !0),
            (e.src =
              'https://cdn.jsdelivr.net/npm/@everfund/js-sdk/dist/js-sdk.global.js'),
            f.parentNode.insertBefore(e, f);
        }
      }
      if ('function' != typeof w.Everfund) {
        var c = function () {
          c.q.push(arguments);
        };
        (c.q = []),
          (w.Everfund = c),
          'complete' === d.readyState
            ? l()
            : w.attachEvent
            ? w.attachEvent('onload', l)
            : w.addEventListener('load', l, !1);
      }
    })(window, document, 'everfund', 'script');
  }
</script>
```

## Usage

```html
<body>
  <div class="buttonContainer">
    <button data-ef-modal="j1q16MvJl5lqfji06bVFKei3HZkW">Donate Now</button>
  </div>
</body>
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

`@everfund/js-sdk` follows good practices of security, but 100% security cannot be assured.

`@everfund/js-sdk` is provided **"as is"** without any **warranty**. Use at your own risk.

_For more information and to report security issues, please refer to our [security documentation](https://github.com/everfund/everfund/blob/main/SECURITY.md)._

## License

This project is licensed under the **MIT license**.

See [LICENSE](https://github.com/everfund/everfund/blob/main/LICENCE.md) for more information.
