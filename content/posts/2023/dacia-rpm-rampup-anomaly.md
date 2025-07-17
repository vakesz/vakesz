---
title: "Dacia RPM Rampup Anomaly"
date: 2023-03-15T18:11:30+02:00
draft: false
tags: ["Dacia", "RPM", "anomaly", "automotive"]
description: "Exploring the RPM rampup anomaly in Dacia vehicles and its implications."
cover:
    image: "/img/dokker_cover.jpg"
    alt: "Dacia Dokker"
    caption: "Dacia Dokker - A common sight on the roads"
---

A few weeks ago, during Continental’s Family Day, I spoke with my father about the persistent idle-speed oscillation in his 2017 Dacia Dokker 1.6. We haven’t lived together for years, so this was the first time I had heard about the problem. Several of the day’s technical presentations dealt with engine-management systems, so diagnosing the fault quickly became our topic of choice.

Because I do not have an in-depth understanding of every automotive subsystem, I asked a couple of colleagues for guidance. The first hypothesis was a faulty throttle-by-wire pedal: perhaps the position sensor was sending a non-linear signal to the engine-control unit, or the connector had an intermittent contact. We ruled this out at a service centre after measuring the full pedal travel with the diagnostic tool - the ECU saw a perfectly linear 0–100 % sweep with no drop-outs.

> My father bought the car new, and the issue has been present since day one. All related ECUs have been reflashed with the latest firmware at least twice, yet the symptom persists.

![Dacia Dokker 2017 1.6](/img/Prague_2017_Dacia_Dokker_1.webp#center)

Last weekend I stayed over at my parents’ house and finally had the car in front of me. After breakfast I headed to the driveway, pulled the trim panel, unplugged the accelerator-pedal connectors, inspected the pins, and reseated everything - no corrosion, no bent terminals.

Buried behind the gear lever I found an old ELM327 dongle. I plugged it into the OBD-II port and - right then I remembered iOS does not support classic-Bluetooth OBD adapters. After half an hour of futile scanning with my iPhone, I dug out an ancient Samsung tablet, installed the first free app in the Play Store, and the connection came alive. Let the games begin. 🙂

![ELM327 Bluetooth](/img/elm327.webp#center)

Holding the pedal steady while watching live data proved impossible, so I asked Dad to maintain roughly 15–20 % throttle while I recorded the PID read-outs. Even with the pedal locked, the engine randomly surged by 300–400 rpm for a second or two and then settled back.

{{< youtube 8EJ7jPH_4eE >}}

At the moment our prime suspect is a minor intake-manifold vacuum leak - small enough not to trigger a diagnostic-trouble code but large enough to lean out the mixture and make the ECU compensate with additional fuel, resulting in a transient rise in revs. Fuel consumption is indeed about 0.5 L / 100 km higher than the factory figure.

We’ll have to wait until the next service interval to check the intake manifold and vacuum hoses. In the meantime, I’ll keep an eye on the fuel consumption and see if it changes.
If you have any experience with this kind of issue or know of a common fault in the Dacia 1.6 engine, please let me know. I’d love to hear your thoughts or suggestions on how to proceed.
