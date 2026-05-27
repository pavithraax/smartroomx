#include <WiFi.h>

#define PIR_PIN 13
#define RELAY_PIN 26

const char* WIFI_NAME = "YOUR_WIFI_NAME";
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD";

bool motionDetected = false;

void initializePins() {

    pinMode(PIR_PIN, INPUT);
    pinMode(RELAY_PIN, OUTPUT);

    digitalWrite(RELAY_PIN, LOW);
}

void connectWiFi() {

    Serial.println();
    Serial.println("Connecting to Wi-Fi...");

    WiFi.begin(WIFI_NAME, WIFI_PASSWORD);

    while (WiFi.status() != WL_CONNECTED) {

        delay(1000);
        Serial.println("Connecting...");
    }

    Serial.println();
    Serial.println("Wi-Fi Connected");
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());
}

void handleMotionDetection() {

    motionDetected = digitalRead(PIR_PIN);

    if (motionDetected == true) {

        Serial.println("Motion Detected");
        digitalWrite(RELAY_PIN, HIGH);

    } else {

        Serial.println("No Motion");
        digitalWrite(RELAY_PIN, LOW);
    }
}

void setup() {

    Serial.begin(115200);

    Serial.println("Starting SmartRoom-X");

    initializePins();

    connectWiFi();
}

void loop() {

    handleMotionDetection();

    delay(1000);
}