---
id: donation-modal
title: Donation Modal
---

The Donation modal is the **low-code** solution for integrating Everfund into a website it gives you (the developer) more control and customisability of the donation flow.

## Installation

Make sure that you have added the script to the bottom of your **&#60/body&#62** or are using the **NPM Package**. [How to install](https://docs.everfund.io/quick-start)

## How to use

```js
import Everfund from "@everfund/sdk"

Everfund.modal({
  code: "hdndyd7xXd0lp",
  onSuccess: function (event) {
    //
  },
  onFailure: function (error) {
    //
  },
  onClose: function () {
    //
  },
})
```

[Full Example](https://codesandbox.io/s/everfund-modal-plain-javascript-example-rbc6c)

## Options

- `code: string` **Required**
  - passing a URL on redirect on success means that when the payment completes it will automatically redirect to whatever link provided so you can create a custom thank you page
- `donationLink: string` **Depreciated**
- `closeOnSuccess: boolean`
  - Once the donation has succeeded the Donation Modal will automatically close and both the `OnSuccess` and `OnClose` event will fire.
- `onSuccess: (event) => {}`
  - Once the donation is completed the onSuccess hook will be executed. This is normaly on thank you page. if closeOnSuccess is not true, then the OnSuccess hook will be executed but the donation UI will still be showing. Once onSuccess and OnClose have been called do whatever action you want`
- `onFailure: (event) => {}`
  - If the Donation Flows fails for any reason the onFailure event will be executed and the Donation Modal will be closed.
- `onClose: () => {}`
  - This event is executed when the Donation Modal is closed. It can be closed middle session, on success or event before a donation has been started`
