const express = require("express");
const mqtt = require("mqtt");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

const mqttClient =
mqtt.connect("mqtt://broker.hivemq.com");

mqttClient.on("connect", () => {

    console.log("MQTT Connected");

    mqttClient.subscribe("smartroomx/motion");
});

mqttClient.on("message", (topic, message) => {

    console.log(
        `[MQTT] ${topic}: ${message.toString()}`
    );
});

app.post("/activate", (req, res) => {

    mqttClient.publish(
        "smartroomx/control",
        "ON"
    );

    res.send("Device Activated");
});

app.post("/deactivate", (req, res) => {

    mqttClient.publish(
        "smartroomx/control",
        "OFF"
    );

    res.send("Device Deactivated");
});

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});