#define PIR_PIN 13
#define RELAY_PIN 26

bool motionDetected = false;

void setup() {

    pinMode(PIR_PIN, INPUT);
    pinMode(RELAY_PIN, OUTPUT);

    Serial.begin(115200);

    Serial.println("SmartRoom-X Initializing...");
}

void loop() {

    motionDetected = digitalRead(PIR_PIN);

    if (motionDetected == true) {

        Serial.println("Motion Detected");
        digitalWrite(RELAY_PIN, HIGH);

    } else {

        Serial.println("No Motion");
        digitalWrite(RELAY_PIN, LOW);
    }

    delay(1000);
}