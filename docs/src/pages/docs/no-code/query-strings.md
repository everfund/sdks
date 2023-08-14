---
title: Query String
description: Donation Links also known as Everfund's No Code tool, Can be generated from inside the dashboard.
---

Web frameworks may provide methods for parsing multiple parameters in the query string, separated by some delimiter. In the example URL below, multiple query parameters are separated by the ampersand, `&`:

Example

```
https://evr.fund/demo?redirect_on_success=https://charityname.com/thank-you
                      |---------------------------------------------------|
                                         Query Strings
```

## Query String Props

| Query String          | Description                                                                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `redirect_on_success` | passing a URL on redirect on success means that when the payment completes it will automatically redirect to whatever link provided so you can create a custom thank you page          |
| `embed_origin`        | this parameter is normally the page that they came from so if they share the donation page on social media it will have a link to share the previous page that they were previously on |
