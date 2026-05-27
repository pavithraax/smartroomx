# SmartRoom-X Hardware Setup

## Hardware Components

| Component | Purpose |
|---|---|
| ESP32 | Main microcontroller |
| PIR Sensor | Motion detection |
| Relay Module | Appliance switching |
| LED / Bulb | Appliance simulation |
| Breadboard | Prototyping |
| Jumper Wires | Connections |
| Power Supply | System power |

---

# ESP32 Pin Mapping

| ESP32 Pin | Connected Component |
|---|---|
| GPIO 13 | PIR Sensor Output |
| GPIO 26 | Relay IN Pin |
| 3.3V | PIR VCC |
| GND | Common Ground |

---

# PIR Sensor Connections

| PIR Pin | ESP32 Connection |
|---|---|
| VCC | 3.3V |
| OUT | GPIO 13 |
| GND | GND |

---

# Relay Module Connections

| Relay Pin | ESP32 Connection |
|---|---|
| VCC | 5V |
| IN | GPIO 26 |
| GND | GND |

---

# System Working

1. PIR sensor continuously monitors room motion.
2. ESP32 reads motion status from PIR output.
3. When motion is detected:
   - relay activates
   - appliance turns ON
4. When no motion is detected:
   - relay deactivates
   - appliance turns OFF

---

# Current Prototype Scope

Current prototype supports:
- single-room monitoring
- occupancy-based automation
- relay-controlled switching
- ESP32 wireless communication

---

# Planned RF Extensions

Future RF integration includes:
- custom 2.4 GHz antenna experimentation
- RSSI monitoring
- antenna simulation workflow
- VNA-based characterization
- SDR-assisted wireless analysis

---

# Safety Note

Relay modules must be handled carefully when connected to AC appliances.

Initial testing should be performed using low-voltage loads such as LEDs before integrating real electrical devices.