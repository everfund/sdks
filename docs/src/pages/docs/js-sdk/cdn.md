---
title: CDN
description: Quidem magni aut exercitationem maxime rerum eos.
---

When developing a website without using a JavaScript bundler like [Vite](https://vitejs.dev/) or [Webpack](https://webpack.js.org/), you will want to use hosted libraries on a CDN network like [JSDelivr](https://www.jsdelivr.com/).

The best way to implement Everfund into a website that does not have a bundling stage is using the JSDelivr CDN. The script below is recommended to be added just before the end of `</body>`

```html
<script>
  {
    !(function (w, d, i, s) {
      function l() {
        if (!d.getElementById(i)) {
          var f = d.getElementsByTagName(s)[0],
            e = d.createElement(s)
          ;(e.type = 'text/javascript'),
            (e.async = !0),
            (e.src =
              'https://cdn.jsdelivr.net/npm/@everfund/js-sdk@1.3.3/dist/js-sdk.umd.js'),
            f.parentNode.insertBefore(e, f)
        }
      }
      if ('function' != typeof w.Everfund) {
        var c = function () {
          c.q.push(arguments)
        }
        ;(c.q = []),
          (w.Everfund = c),
          'complete' === d.readyState
            ? l()
            : w.attachEvent
            ? w.attachEvent('onload', l)
            : w.addEventListener('load', l, !1)
      }
    })(window, document, 'everfund', 'script')
  }
</script>
```

## Example

{% framework-links %}

{% framework-link title="StackBlitz" icon="source" href="https://stackblitz.com/github/everfund/everfund/tree/main/examples/cdn" /%}

{% framework-link title="GitHub" icon="github" href="https://github.com/everfund/everfund/tree/main/examples/cdn" /%}

{% /framework-links %}

| Stack        | Type                   |
| ------------ | ---------------------- |
| Everfund SDK | `@everfund/js-sdk` CDN |
| Language     | HTML                   |
| CSS          | Plain CSS              |

{% embededCode src="https://stackblitz.com/github/everfund/everfund/tree/main/examples/cdn" title="@everfund/sdk: CDN JavaScript Example" /%}
