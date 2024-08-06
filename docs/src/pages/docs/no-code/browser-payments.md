---
title: Enabling Browser Payments
description: How to enable Apple Pay, Google Pay & other browser payments on your donation portal.
---

To enable browser payments like Apple and Google Pay on your donation portal, you need to add the domain you are hosting your donation portal on to the Everfund dashboard.

## Step 1: Navigate to Domain Settings

Navigate to the domain page found in your Organizations settings page in the Everfund dashboard.

## Step 2: Enter your domain name

Enter your domain name in the new domain form, these are the domains that you want to enable browser payments on and they must be the same as the domain that you are hosting your donation portal on.

For example, if your portal is hosted on `donate.charityname.com`, you would enter `donate.charityname.com`, in the domain settings.

## Step 3: Additional Verification

After you have entered your domain name, you will need to verify your domain by adding a file to your website. This will enable Apple Pay on your donation portal.

- Click on the domain you want to verify
- Download the verification file
- Upload the verification file to the your website so it is accessible at `donate.charityname.com/.well-known/apple-developer-merchantid-domain-association`
- Click on the verify button in the Everfund dashboard

If verification is successful, you will see a success message in the dashboard and Apple Pay will be enabled on your donation portal.

Please note Apple Pay is only availble on Safari browsers.
