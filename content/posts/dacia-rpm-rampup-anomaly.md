---
title: "Dacia RPM Rampup Anomaly"
date: 2023-03-15T18:11:30+02:00
draft: false
tags: ["Dacia", "RPM", "anomaly", "automotive"]
description: "Exploring the RPM rampup anomaly in Dacia vehicles and its implications."
cover:
    image: "img/dokker_cover.webp"
    alt: "Dacia Dokker"
    caption: "Dacia Dokker - A common sight on the roads"
---

A few weeks ago, during Continental’s family day, I had a discussion with my father about his Dacia, which has been experiencing issues with maintaining a stable RPM while driving. (We haven’t lived together for quite some time.) Since there were several presentations about how different systems in cars operate, this problem naturally came up.

As I don’t have a complete understanding of how every system in a car works, I consulted some of my colleagues to see if they had any ideas on how to diagnose this behavior. Most suspected the throttle pedal, suggesting that it might not be sending a linear signal to the motor control unit, or that there might be a contact failure in its connection. Unfortunately, this turned out not to be the case. We took the car to a service center, where the pedal travel was measured to see if the values were being registered correctly. Everything seemed fine.

> He is the first owner of the car, and it has been malfunctioning ever since it was taken out of the shop. The car has also received many firmware updates for each related ECU, but this still hasn’t resolved the issue.

![Dacia Dokker 2017 1.6](/img/Prague_2017_Dacia_Dokker_1.webp#center)

Last weekend, I decided to stay at my dad’s place. After breakfast, it occurred to me that the car was right there, and we still hadn’t figured out the root cause of the issue. I went out to the garden, opened up the car, unplugged the pedal connectors, and checked them for any visible issues, but I couldn’t spot anything, so I just reseated them.

Then I noticed there was an ELM327 module in the car. Curious, I connected it to the car’s OBD port and started downloading some apps for it on my iPhone. After about an hour of trying, I concluded that these modules aren’t supported on iOS (except for WiFi variants). So, I grabbed an old Samsung tablet, downloaded the first app I saw on the Google Play Store, and voilà! It worked right away. That’s when the fun began. 🙂

![ELM327 BT LE](/img/elm327.webp#center)

I tried to hold the pedal steady while monitoring the OBD outputs, but it was hard to focus on both at once. What struck me as odd was that the car would rev up even when I was holding the pedal at around 15–20%. So I asked my father to keep the pedal in a fixed position while I recorded a video of the diagnostic output.

{{< youtube 8EJ7jPH_4eE >}}

Right now, we only have a few suspicions. The most likely cause seems to be a very small vacuum leak, which isn’t setting any DTCs on the ECUs. If the car is drawing in more air due to a leak, the RPM will increase (more air = more fuel). We’ve also noticed that fuel consumption is a bit higher than it should be.

If we manage to confirm or disprove this theory, I’ll share my findings here. Until then, take care and have a nice day!
