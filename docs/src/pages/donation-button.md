---
id: donate-button
title: Donation Button
---

The donation button is an easy way to add a basic version of the [Donation Model](https://developer.everfund.io/donation-modal) to your website.

To integrate the donation button simply add the script tag to your page, and the button to your HTML.

You can find the script tag on the [quick start page](https://3000-orange-koi-8g010e2m.ws-eu16.gitpod.io/quick-start#install-from-cdn).

```html
<body>
  <button data-ef-modal="https://evr.fund/demo">Donate Now</button>
</body>
```

Full HTML [Example](https://codesandbox.io/s/everfund-donation-button-example-br01y)

## Loading Multiple Donation Modals

Once the everfund script has been loaded multiple buttons can be placed on the page, giving you the ability to run multiple campaigns, or hyper directed fundraing with diffrent templates for diffrent parts of the website.

```html
<body>
  <button data-ef-modal="https://evr.fund/demo">Donate Now</button>
  <button data-ef-modal="https://evr.fund/demo2">Donate Now</button>
</body>
```
