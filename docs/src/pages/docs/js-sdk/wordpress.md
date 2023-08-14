---
title: WordPress
description: Quidem magni aut exercitationem maxime rerum eos.
---

# Installing the WordPress Plugin

The easiest way to install Everfund into a WordPress website is by downloading Everfund's plugin in the WordPress plugin store or download it directly from WordPress here as it is version controlled and can always be updated automatically through WordPress plugin system.

{% framework-links %}
{% framework-link title="WordPress Plugin" icon="source" href="https://wordpress.org/plugins/everfund/" /%}
{% framework-link title="GitHub" icon="github" href="https://github.com/everfund/everfund/tree/main/packages/wp-sdk" /%}
{% /framework-links %}

### Step 1

Go to the Plugins Page and click Add New
![Install Now](https://ik.imagekit.io/everfund/docs/wp-1_aclf815-c.png)

### Step 2

1. Search for "everfund", Everfund Donation Widget should appear in the search results
2. Click Install Now

![https://ik.imagekit.io/everfund/docs/wp-2_q6UHDUIY9.png](https://ik.imagekit.io/everfund/docs/wp-2_q6UHDUIY9.png)

### Step 3

1. Activate the Everfund plugin
2. Optional - Chose to enable auto updates to the Everfund widget

![https://ik.imagekit.io/everfund/docs/wp-3_wScgyQ-Xy.png](https://ik.imagekit.io/everfund/docs/wp-3_wScgyQ-Xy.png)

### Step 4

Now that the widget is installed, you'll see a new sidebar item has been added called Donations. This is a quick way to get to whether the widget has been fully set up and the script has been injected onto the required pages.

![https://ik.imagekit.io/everfund/docs/wp-4_mh9n-3tbU.png](https://ik.imagekit.io/everfund/docs/wp-4_mh9n-3tbU.png)

## Using the Gutenburg Editor to add in a donation button

The Guttenberg editor is the latest editor that is now activated by default on every WordPress website. You can use the default button block to create a donation button for Everfund and follow the steps to find out how.

### Step 1

Create a donation button and then click edit as HTML

![Create a button in the editor](https://ik.imagekit.io/everfund/docs/wp-5_1__ef-0_cp1C.png)

### Step 2

Add the custom anchor of `data-ef-model` to the `a` tag

Example:

```html
<div class="wp-block-button">
  <a class="wp-block-button__Link" data-ef-modal="j1q16MvJl5lqfji06bVFKei3HZkW">
    Donate Now
  </a>
</div>
```

![Adding the custom data-anchor](https://ik.imagekit.io/everfund/docs/wp-6_1__DtMmWj-ev.png)

### Step 3

On confirmation, the editor will believe that the block is invalid or unexpected content and will give you an option to attempt to recover the block. Do not attempt to recover the block. Just click save and then go to the website and you'll see that the donation button looks normal and when clicked it will open up the Everfund donation widget.

![Attempt to recover block](https://ik.imagekit.io/everfund/docs/wp-7_1__2XTRpZFtN.png)

## Using the widget outside the WordPress editor

Instead of using the WordPress editor you can hard code the data-ef-modal anchor onto any element anywhere on the website using the donation button or model.
