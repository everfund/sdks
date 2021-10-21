---
id: installation
title: Installation
---

Installation

Everfund SDK can can be installed through multiple methods such as CDN and NPM it is up to you the developer which you choose to use we recommend that if you React, Sevelt or Vue to use the NPM. And if you are outside of the javascript ecosystem to use the CDN

### Install from NPM

```bash
yarn add @everfund/sdk
// or
npm install @everfund/sdk
```

### Install from CDN

To load from the CDN use this universal asynchronous script to load everfunds SDK

```html
<script>
  {
    !(function (w, d, i, s) {
      function l() {
        if (!d.getElementById(i)) {
          var f = d.getElementsByTagName(s)[0],
            e = d.createElement(s)
          ;(e.type = "text/javascript"),
            (e.async = !0),
            (e.src =
              "https://cdn.jsdelivr.net/npm/@everfund/sdk@1.2.1/dist/m.js"),
            f.parentNode.insertBefore(e, f)
        }
      }
      if ("function" != typeof w.Everfund) {
        var c = function () {
          c.q.push(arguments)
        }
        ;(c.q = []),
          (w.Everfund = c),
          "complete" === d.readyState
            ? l()
            : w.attachEvent
            ? w.attachEvent("onload", l)
            : w.addEventListener("load", l, !1)
      }
    })(window, document, "everfund", "script")
  }
</script>
```
