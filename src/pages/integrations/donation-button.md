---
id: donate-button
title: Donation Button
---

The donate button is the simplist form of evefund and it requires only two things to run the 'script' and the 'button'

This version of the script will be loaded loaded in at the start of page load.

```html
<html lang="en">
  <head>
    <title>Everfund Donation Widget</title>
  </head>
  <body>
    <button data-ef-modal="https://evr.fund/demo">Donate Now</button>
    <script src="https://script.everfund.co.uk/m.js"></script>
  </body>
</html>
```

## Async Script Load

Write some code in that explains asyncronous script loading

```js
<html lang="en">
  <head>
    <title>Everfund Donation Widget</title>
  </head>
  <body>
    <button data-ef-modal="https://evr.fund/demo">Donate Now</button>
    yarn <script>
      !(function (w, d, i, s) {
        function l() {
          if (!d.getElementById(i)) {
            var f = d.getElementsByTagName(s)[0],
              e = d.createElement(s)
            ;(e.type = "text/javascript"),
              (e.async = !0),
              (e.src = "https://script.everfund.co.uk/m.js"),
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
    </script>
  </body>
</html>
}
```

## Loading multiple donation portals

Also once the everfund script has been loaded multiple buttons can be placed on the page,  meaning that you could have multiple courses if wanted or hyper directed fundrasers

```js
<html lang="en">
  <head>
    <title>Everfund Donation Widget</title>
  </head>
  <body>
    <button data-ef-modal="https://evr.fund/demo">Donate Now</button>
    <button data-ef-modal="https://evr.fund/demo2">Donate Now</button>
    <script>
      !(function (w, d, i, s) {
        function l() {
          if (!d.getElementById(i)) {
            var f = d.getElementsByTagName(s)[0],
              e = d.createElement(s)
            ;(e.type = "text/javascript"),
              (e.async = !0),
              (e.src = "https://script.everfund.co.uk/m.js"),
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
    </script>
  </body>
</html>
}
```
