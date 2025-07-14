---
title: "Automotive Hacking and Know-How"
date: 2023-02-08T12:11:30+02:00
draft: false
tags: ["automotive", "hacking", "know-how", "CAN", "CAN-FD", "CAN-XL", "FlexRay", "Ethernet", "LIN", "SOME/IP", "DoIP"]
description: "A dive into automotive networks, protocols, and how to get started with automotive hacking."
cover:
    image: "img/hacking_cover.webp"
    alt: "Automotive Hacking"
    caption: "Exploring the world of automotive networks and hacking"
---

I’ve been a regular listener of the [Hack és Lángos Podcast](https://hackeslangos.show/) for years. They often break down how in-vehicle networks work, what you can observe or modify inside a car, and why security matters. If you understand Hungarian and enjoy IT security topics, it’s well worth your time.

---

## Core automotive protocols

| Protocol                                        | Purpose & key traits                                                                                                | Status in 2025                                              |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **CAN 2.0**                                     | 1 Mbit/s arbitration-based bus for control messages. Cheap, ubiquitous, limited payload (8 bytes).                  | Still everywhere for body/chassis control.                  |
| **CAN-FD**                                      | Extends CAN to 64-byte payloads and up to 8 Mbit/s in the data phase.                                               | Shipping on nearly every new model since \~2021.            |
| **LIN**                                         | Low-cost single-wire bus (19.2 kbit/s) for simple actuators (mirrors, seats, HVAC flaps).                           | Mature and still growing.                                   |
| **FlexRay**                                     | 10 Mbit/s dual-channel, time-triggered, fault-tolerant.                                                             | Niche; being replaced by Ethernet in new E/E architectures. |
| **Automotive Ethernet (100/1000BASE-T1 + TSN)** | Switched network for ADAS, infotainment, OTA updates; supports Time-Sensitive Networking for deterministic traffic. | Standard for domain/zonal backbones since 2023.             |
| **SOME/IP**                                     | Service-oriented middleware over Ethernet (often with DoIP).                                                        | OEM-agnostic standard for ADAS & infotainment.              |
| **DoIP (Diagnostics over IP)**                  | Runs UDS diagnostics on TCP/UDP instead of CAN.                                                                     | Mandatory for EU Regulation 2018/858 remote diagnostics.    |

> There are many other protocols used in the automotive field, but these are the ones I’m most familiar with and have seen in use. Of course, there’s also LIN and CAN-FD, but I’d just like to provide a starting point for you to decide if you’d like to dig deeper.

![Automotive network layers and typical data rates](/img/network.webp#center)

---

## Getting your first traces

1. **Start with the OBD-II port** (standard 16-pin J1962 connector).

   * Cheap ELM327-compatible dongles work for basic UDS/OBD requests.
   * For raw bus logging, use an interface that supports **CAN sniffing**, e.g. *CandleLight*, *CANtact Pro*, or *ValueCAN 4*.

2. **Understand the gateway**. Most vehicles route only diagnostic frames to OBD. To see everything:

   * Locate the gateway ECU in the wiring diagram.
   * Back-probe the high-speed CAN bus, or create a **bench harness** with the target ECUs plus a lab power supply (12 V and 5 V rails).

3. **Choose your tooling**.

   * **Commercial**: Vector **CANalyzer/CANoe**, Intrepid **Vehicle Spy**.
   * **Open-source**: **Wireshark** (with `socketcan`), **SavvyCAN**, **Kayak**, or **cabana** (Comma.ai).
   * On Linux, SocketCAN with a `$ ip link set can0 up type can bitrate 500000` is your friend.

4. **Decode the data**. Without a DBC (database) file, frames are just IDs and payloads. Public options:

   * **[OpenDBC](https://github.com/commaai/opendbc)** – crowd-sourced DBCs for >150 models.
   * OEM repair manuals often leak DIDs and PID mappings.
   * Reverse-engineering: record a log while actuating something (window switch, indicator) and diff the frames.

## Responsible experimentation

* **Always bench-test first**. Shorting a bus or sending malformed frames **can brick an ECU**.
* Maintain a clean power supply (13.8 V max) and current-limit to 2–3 A.
* Keep an **OBD service tool** (e.g. Autel AP200) handy to clear Diagnostic Trouble Codes (DTCs).
* Never probe live airbags or high-voltage (EV battery) buses unless you’re trained and have proper PPE.
* Anything you send on public roads must comply with local traffic laws; tampering with safety systems is illegal in most jurisdictions.

## Where to go next?

| Goal              | Suggested project                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| Build confidence  | Log CAN traffic and blink a dashboard light by replaying the frame.                                      |
| Add features      | Retrofit a reverse camera, enable hidden OEM functions (e.g. lane-assist).                               |
| Security research | Perform fuzzing of UDS services (beware of permanent DTCs).                                              |
| Advanced          | Set up an **Ethernet TSN** lab with an NXP SJA1105 switch and experiment with SOME/IP service discovery. |

---

## Further reading & resources (2025)

* **[Awesome Automotive Security](https://github.com/Marcin214/awesome-automotive)** – curated list of papers, tools, talks.
* **Car Hacking Handbook (2nd ed., 2024)** – definitive intro with practical labs.
* **[OpenDBC](https://github.com/commaai/opendbc)** – public DBC collection.
* **[AUTOSAR](https://www.autosar.org/standards/classic-23-11/)** – spec bundles, including Cryptographic Library.
* **[*The Bus Reverse-Engineered*](https://www.youtube.com/watch?v=myW2cxyOHEQ)** – Donut Media replay attack demo.
* **BMW Future Mobility R\&D** – [tour by LTT](https://www.youtube.com/watch?v=3In3u2QpSUE).
* **SANS ICS612 Automotive Cybersecurity** – hands-on offensive/defensive training.

*Happy (and safe) hacking!*
