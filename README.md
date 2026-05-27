# SmartRoom-X

SmartRoom-X is an intelligent room automation system built using ESP32, IoT communication, and RF optimization techniques to create a smarter, energy-efficient, and wireless-aware indoor environment.

Unlike traditional smart automation projects that only switch appliances ON/OFF, SmartRoom-X focuses on reliable wireless communication, occupancy-based automation, and real-time monitoring while exploring custom antenna integration for improved IoT connectivity.

---

# Why This Project Exists

Most low-cost smart room systems suffer from:

- unreliable Wi-Fi coverage
- signal drops indoors
- inefficient energy usage
- lack of occupancy awareness
- poor scalability

SmartRoom-X aims to solve these problems by combining embedded systems, IoT automation, and RF engineering into a single platform.

---

# Core Idea

The system automatically detects human presence using PIR sensors and intelligently controls appliances through relay modules connected to an ESP32.

At the same time, the project explores RF optimization techniques such as custom 2.4 GHz antenna experimentation, RSSI analysis, and future VNA/SDR-based wireless characterization to improve communication reliability.

---

# Features

## Smart Automation
- Motion-based appliance control
- Occupancy-aware room management
- Automatic ON/OFF switching
- Real-time device monitoring

## IoT Connectivity
- ESP32 Wi-Fi communication
- MQTT-based messaging
- Dashboard integration
- Remote monitoring capability

## RF Optimization
- 2.4 GHz antenna experimentation
- Wireless signal analysis
- RSSI performance comparison
- Future HFSS/CST simulation workflow
- Planned VNA characterization

---

# System Architecture

```text
PIR Sensor
     ↓
ESP32 Controller
     ↓
Relay Module → Appliances
     ↓
Wi-Fi / MQTT
     ↓
Dashboard Monitoring
     ↓
RF Optimization Layer