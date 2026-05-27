# SmartRoom-X Architecture

## System Overview

SmartRoom-X is designed as an intelligent room automation system that combines embedded automation, wireless IoT communication, and RF optimization concepts into a unified platform.

The system detects room occupancy using PIR sensors and automatically controls appliances through relay modules connected to an ESP32 microcontroller.

Wireless communication enables future dashboard monitoring and remote control functionality.

The architecture also includes an RF optimization layer focused on improving wireless reliability and communication performance.

---

# High-Level Architecture

```text
                    +----------------------+
                    |   Dashboard System   |
                    | Monitoring & Control |
                    +----------+-----------+
                               |
                         Wi-Fi / MQTT
                               |
+------------------------------------------------------+
|                    ESP32 Controller                  |
|------------------------------------------------------|
|                                                      |
|  +---------------+      +----------------------+     |
|  |  PIR Sensor   | ---> | Motion Detection     |     |
|  +---------------+      +----------------------+     |
|                                                      |
|  +---------------+      +----------------------+     |
|  | Relay Module  | <--- | Appliance Controller |     |
|  +---------------+      +----------------------+     |
|                                                      |
|  +-----------------------------------------------+   |
|  | Wireless Communication & RF Layer             |   |
|  |                                               |   |
|  | - Wi-Fi Communication                         |   |
|  | - RSSI Monitoring                             |   |
|  | - 2.4 GHz Antenna Experimentation             |   |
|  +-----------------------------------------------+   |
|                                                      |
+------------------------------------------------------+
```

---

# Main System Components

## ESP32 Controller

The ESP32 acts as the central processing and communication unit of the system.

Responsibilities:
- sensor data processing
- appliance control
- wireless communication
- future MQTT integration
- RF experimentation support

---

## PIR Sensor Layer

The PIR sensor continuously monitors room occupancy by detecting human motion.

Functionality:
- occupancy detection
- automation triggering
- energy-efficient control logic

---

## Relay Control Layer

Relay modules interface the ESP32 with electrical appliances.

Functionality:
- appliance switching
- automated control
- remote activation capability

---

## Wireless Communication Layer

The ESP32 communicates wirelessly using Wi-Fi.

Planned communication features:
- MQTT messaging
- dashboard integration
- real-time monitoring
- remote automation control

---

## RF Optimization Layer

Unlike traditional smart automation projects, SmartRoom-X also explores RF-aware communication optimization.

RF experimentation includes:
- antenna experimentation
- RSSI analysis
- wireless stability observation
- future VNA characterization
- future SDR integration

This layer focuses on improving communication reliability in indoor IoT environments.

---

# System Workflow

1. PIR sensor detects room occupancy.
2. ESP32 processes occupancy information.
3. Relay module controls appliances automatically.
4. Wireless communication transmits monitoring data.
5. RF layer analyzes wireless communication quality.

---

# Design Goals

- intelligent room automation
- reduced unnecessary energy consumption
- reliable wireless communication
- scalable IoT architecture
- RF-aware smart infrastructure

---

# Future Expansion

Future versions of SmartRoom-X may include:
- mesh communication
- LoRa integration
- AI-based occupancy prediction
- RF interference analysis
- multi-room deployment
- antenna simulation and fabrication