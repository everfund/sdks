---
id: wordpress
title: Wordpress
---

## Installing the wordpress plugin

The easiest way to install ever fun into WordPress website is by downloading the plug-in in the WordPress plug-in store as it is version controlled and can always be updated automatically through WordPress plug-in system.

If you find it simpler you can just add the CD and link to your head attack through whatever method you would like and it would still work on your website

### Step 1
Go to the **Plugins Page** and click **Add New**
![Go to the Plugins Page and click "Add New"](https://ik.imagekit.io/everfund/docs/wp-1_aclf815-c.png)


### Step 2
1) Search For the word **"everfund"**, Everfund Donatin Widget Should appear in the search results
2) Click **Install Now**

![Searching and installing the Everfund Donation Widget](https://ik.imagekit.io/everfund/docs/wp-2_q6UHDUIY9.png)


### Step 3
1) Active the everfund plugin

2) Optional - Chose to enable auto updates to the everfund widget


![Activating the everfund widget ](https://ik.imagekit.io/everfund/docs/wp-3_wScgyQ-Xy.png)


### Step 4
Now that the widget is installed you see a new sidebar item has been added to donations this is just a quick way to quickly go to the witches and the donations on the dashboard Haverford has been fully set up and the script has been injected onto every single page.
![Everfund Donation Admin Bar](https://ik.imagekit.io/everfund/docs/wp-4_mh9n-3tbU.png)

## Using the Gutenburg Editor to add in a donate button
The Guttenberg editor is the latest editor that is now activated by default on every WordPress website. You can use the default button block to create a donation button for ever fun and follow the steps to find out how

### Step 1
Create a donation button and then click edit as HTML
![Test](https://ik.imagekit.io/everfund/docs/wp-5_1__ef-0_cp1C.png)

### Step 2
Add the custom anchor of data-ef-model to the A tag 

It should look like ```<a data-ef-modal="demo" class="wp-....">```

![Adding the custom data-anchor](https://ik.imagekit.io/everfund/docs/wp-6_1__DtMmWj-ev.png)
### Step 3
On confirmation the Guttenberg editor it will believe that the block is invalid or unexpected cpontent and will give you an option to attempt to recover the block. **Do not** attempt to recover the block. Just click save and then go to the website and you'll see that the donation button looks normal and when clicked it will open up the everfund donation widget
![Attempt to recover block](https://ik.imagekit.io/everfund/docs/wp-7_1__2XTRpZFtN.png)

## manualy coding it in somewhere

Instead of using the WordPress editor you can hard code the `data-ef-modal` anchor onto any element anywhere on the website using the [Donation button](/donation-button) or [model](/donation-modal).
