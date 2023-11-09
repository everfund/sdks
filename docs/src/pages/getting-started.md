---
title: Getting Started
pageTitle: Everfund - Pick a framework
description: Get started with Everfund
---

Everfund’s SDKs makes it possible to setup your donation page in minutes. 

Get started by picking a framework:
{% selector type="sdk" /%}

## Getting your Access Key
Access Keys are generated for Website Donation Form Channels on the Everfund Dashboard. After creating the channel you can get your channel access key from the channel’s page. 

{% if sdk="react"  %}
## Installing @everfund/react-sdk
```bash
npm install @everfund/react-sdk
yarn install @everfund/react-sdk
pnpm install @everfund/react-sdk
```

## Checkout Modal
The checkout modal is a widget triggered by the `Donate Now` button. 

```ts
import { useDonationCheckoutModal } from '@everfund/react-sdk'
import { useState } from 'react'

export const DonateNow = () => {
  const { openModal } = useDonationCheckoutModal({
    code: 'your-access-key',
  })

  return (
    <button className="button" onClick={() => openModal()}>
      Donate Now
    </button>
  )
}
```

## Donation Form
The donation form is a widget that can be embedded into your websites page. 

```ts
import { DonationForm } from '@everfund/react-sdk'

export const App = () => (
  <div>
    <div>Some content...</div>
    <div>
      <DonationForm code="your-acess-key" />
    </div>
  </div>
)
```
  
{% /if %} 

{% if sdk="js"  %}
## Installing @everfund/js-sdk as ES Module
```bash
npm install @everfund/js-sdk
yarn install @everfund/js-sdk
pnpm install @everfund/js-sdk
```

## Installing @everfund/js-sdk as a script
Add the following script to your site’s `<body>` element.

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

## Checkout Modal
The checkout modal is a widget triggered by the `Donate Now` button. 

```js
import { checkoutModal } from '@everfund/js-sdk';

document?.getElementById('donate-modal')?.addEventListener('click', () => {  
	console.log('launch Everfund Modal');  
	checkoutModal.modal({    
		code: 'your-access-key',    
		onSuccess: function (onSuccessPayload) { 
			console.log(onSuccessPayload);    
		},    
		onFailure: function (error) { 
			console.log(error);    
		},    
		onClose: function () {
			console.log('Closed Modal');    
		},  
	});
});
```


{% /if %} 


