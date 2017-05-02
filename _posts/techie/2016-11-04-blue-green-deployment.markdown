---
title: Blue Green Deployment
img: http://arpitbhayani.me/static/images/blue-green/blue-green.jpg
layout: post
comments: true
tags:
 - devops
 - deployment
categories: techie
seo:
 tags:
  - devops
  - deployment
  - blue green
  - bluegreen
  - blue-green
  - no downtime
 description: Blue-green deployment is a release technique that reduces downtime and risk by running two identical production environments called Blue and Green.
---

The apt one liner about **Blue Green** deployment can be found out on [Cloud Foundry](https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html) which is,

> Blue-green deployment is a release technique that reduces downtime and risk by running two identical production environments called Blue and Green.

The fundamental idea is to have two easily switchable environments to switch between.

Different ways to switch:

- One project did the switch by bouncing the web server rather than working on the router.
- Another variation would be to use the same database, making the blue-green switches for web and domain layers.

The two environments need to be different but as identical as possible. This can happen via following

- different pieces of hardware
- different virtual machines running on the same (or different) hardware
- can also be a single operating environment partitioned into separate zones with separate IP addresses for the two slices

## How deployment happens
At any time one of them, let's say blue for the example, is live. As you prepare a new release of your software you do your final stage of testing in the green environment. Once the software is working in the green environment, you switch the router so that all incoming requests go to the green environment - the blue one is now idle.

Both green and blue environments regularly cycles between live, previous version (for rollback) and staging the next version.

## Advantages
- Blue-green deployment also gives you a rapid way to rollback
- You get a hot-standby working. Hence allows you to test your disaster-recovery procedure on every release.

## Disadvantages
- With rapid rollback there is one issue,
  dealing with missed transactions while the green environment was live.
  Solution: feed transactions to both environments in such a way as to keep the blue environment as a backup when the green is live

## How to handle database changes
You need to change the schema to support a new version of the software. The trick is to separate the deployment of schema changes from application upgrades. So first apply a database refactoring to change the schema to support both the new and old version of the application, deploy that, check everything is working fine so you have a rollback point, then deploy the new version of the application. And when the upgrade has bedded down remove the database support for the old version.

## References:
- [Martin Fowler on Blue Green Deployment](http://martinfowler.com/bliki/BlueGreenDeployment.html)
- [Cloud Foundry on Blue Green Deployment](https://docs.cloudfoundry.org/devguide/deploy-apps/blue-green.html)
