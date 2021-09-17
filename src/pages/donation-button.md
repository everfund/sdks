---
id: donate-button
title: Donation Button
---

The donation button is an easy way to integrate the [Donation Model](https://developer.everfund.io/donation-modal) with less capability but also complexity. It only requires two parts the script to be added onto the page and the button to be added to the HTML.

You can find the script tag on the [quick start page](https://3000-orange-koi-8g010e2m.ws-eu16.gitpod.io/quick-start#install-from-cdn).

```html
<body>
  <button data-ef-modal="https://evr.fund/demo">Donate Now</button>
</body>
```

Full HTML [Example](https://codesandbox.io/s/everfund-donation-button-example-br01y)

## Loading Multiple Donation Modals

Also once the everfund script has been loaded multiple buttons can be placed on the page, meaning that you could have multiple courses if wanted or hyper directed fundrasers

```html
  <body>
    <button data-ef-modal="https://evr.fund/demo">Donate Now</button>
    <button data-ef-modal="https://evr.fund/demo2">Donate Now</button>
  </body>
```


