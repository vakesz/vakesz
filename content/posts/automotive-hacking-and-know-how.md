---
title: "Automotive Hacking and Know-How"
date: 2023-02-08T12:11:30+02:00
draft: false
tags: ["automotive", "hacking", "know-how", "CAN", "FlexRay", "Ethernet"]
description: "A dive into automotive networks, protocols, and how to get started with automotive hacking."
cover:
    image: "img/hacking_cover.webp"
    alt: "Automotive Hacking"
    caption: "Exploring the world of automotive networks and hacking"
---

I’ve been listening to the [Hack és Lángos Podcast](https://hackeslangos.show/) for quite a while now, and lately, they’ve been discussing how automotive networks function, what you can see or modify in a car, and other related topics. It’s been fascinating! First of all, I highly recommend it to anyone interested in IT security and who understands Hungarian.

Let’s start with the protocols themselves.

- **FlexRay**  
  FlexRay is a communication bus designed to ensure high data rates and fault tolerance, operating on a time cycle split into static and dynamic segments for event-triggered and time-triggered communications. However, it is much more expensive compared to other options.

- **CAN**  
  The Controller Area Network (CAN) is a message-based protocol originally designed for multiplex electrical wiring within automobiles to reduce the amount of copper needed. Data in each frame is transmitted serially and received by all devices, including the transmitter itself.

- **Automotive Ethernet**  
  The push for in-vehicle Ethernet is driven by the increasing demand for ADAS (Advanced Driver-Assistance Systems) functions, automated and autonomous driving, as well as infotainment use cases. Ethernet is inexpensive, but it is not yet widely used in automotive applications.

> There are many other protocols used in the automotive field, but these are the ones I’m most familiar with and have seen in use. Of course, there’s also LIN and CAN-FD, but I’d just like to provide a starting point for you to decide if you’d like to dig deeper.

![Automotive Networks and their connections](/img/network.webp#center)

## So, how do you start?

All cars have some kind of OBD port, through which you can connect either an ELM327 module or an Arduino Uno with a CAN breakout board. However, the information available through these ports may be very limited, as you’re usually interfacing with a gateway module that only forwards a small percentage of all the car’s messages. You might not see everything. If you want deeper access, you’ll need to connect directly to the wiring harness to see all communications.

In the automotive world, tools like Vector CANalyzer or CANoe are commonly used for this purpose, but they are commercial software and not easily accessible. If you manage to get access, use them happily. For others, Wireshark can be a great option as well. However, even if you have the best tools, you’ll need a database to interpret the frames and understand what’s on the network. There’s a resource called OpenDBC on GitHub, which contains some car database files—most likely reverse-engineered or leaked.

## What’s next?

You can find many interesting projects on GitHub, such as adding a reverse camera to your car (which might have been a paid option when you bought it), or just experimenting with new ideas. Whatever you do, remember it’s your own responsibility. I highly recommend having an OBD tool, so that if you make a mistake, you can at least send a ClearDTC command to your car and recover from any ‘damage’ you’ve caused.

I’ve tried to collect several useful pages here, where you can find a lot of information about how these systems work or how to go even further. For example, you can learn about the most common protection algorithms used (see the AUTOSAR page), how OBD is defined, or simply watch videos about automotive development (by LTT) or replay attacks (by Donut Media), all linked below.

## Important links

- [Awesome Automotive](https://github.com/Marcin214/awesome-automotive) – GitHub
- [OpenDBC](https://github.com/commaai/opendbc) – GitHub
- [AUTOSAR](https://www.autosar.org/) – Official Page
- [Replay attack example](https://www.youtube.com/watch?v=myW2cxyOHEQ) – Donut Media
- [BMW’s Billion Euro R&D Facility](https://www.youtube.com/watch?v=3In3u2QpSUE) – LTT
- [BMW – Concept Autonomous Cars & Motorbike!](https://www.youtube.com/watch?v=PhSooO33Eus) – LTT
