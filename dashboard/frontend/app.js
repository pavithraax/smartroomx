const motionStatus =
document.getElementById("motionStatus");

async function turnOn() {

    motionStatus.innerHTML =
    "Activating...";

    motionStatus.style.color =
    "#38bdf8";

    try {

        await fetch(
            "http://localhost:3000/activate",
            {
                method:"POST"
            }
        );

        motionStatus.innerHTML =
        "Occupancy Detected";

        motionStatus.style.color =
        "#4ade80";

    } catch(error){

        motionStatus.innerHTML =
        "Connection Error";

        motionStatus.style.color =
        "#f87171";
    }
}

async function turnOff() {

    motionStatus.innerHTML =
    "Deactivating...";

    motionStatus.style.color =
    "#38bdf8";

    try {

        await fetch(
            "http://localhost:3000/deactivate",
            {
                method:"POST"
            }
        );

        motionStatus.innerHTML =
        "Room Idle";

        motionStatus.style.color =
        "#f87171";

    } catch(error){

        motionStatus.innerHTML =
        "Connection Error";

        motionStatus.style.color =
        "#f87171";
    }
}

const logs =
document.getElementById("logs");

const events = [

    "[PIR] Motion detected",
    "[SYSTEM] Relay activated",
    "[NETWORK] MQTT packet transmitted",
    "[RF] RSSI fluctuation detected",
    "[SYSTEM] Occupancy updated",
    "[ESP32] Node heartbeat received"
];

setInterval(() => {

    const randomEvent =
    events[Math.floor(Math.random() * events.length)];

    const newLog =
    document.createElement("p");

    const time =
    new Date().toLocaleTimeString();

    newLog.innerHTML =
    `[${time}] ${randomEvent}`;

    logs.prepend(newLog);

    if(logs.children.length > 6){

        logs.removeChild(logs.lastChild);
    }

},3000);
const ctx =
document.getElementById("signalChart");

const signalChart =
new Chart(ctx, {

    type:"line",

    data:{

        labels:["1","2","3","4","5","6"],

        datasets:[{

            label:"RSSI Signal",

            data:[-62,-64,-60,-59,-63,-61],

            borderColor:"#38bdf8",

            backgroundColor:"rgba(56,189,248,0.15)",

            tension:0.4,

            fill:true
        }]
    },

    options:{

        responsive:true,

        plugins:{

            legend:{

                labels:{

                    color:"white"
                }
            }
        },

        scales:{

            x:{

                ticks:{
                    color:"white"
                },

                grid:{
                    color:"rgba(255,255,255,0.05)"
                }
            },

            y:{

                ticks:{
                    color:"white"
                },

                grid:{
                    color:"rgba(255,255,255,0.05)"
                }
            }
        }
    }
});

setInterval(() => {

    const randomSignal =
    Math.floor(Math.random() * (-55 + 70) - 70);

    signalChart.data.datasets[0].data.push(
        randomSignal
    );

    signalChart.data.datasets[0].data.shift();

    signalChart.update();

},2000);
const roomLight =
document.getElementById("light");

setInterval(() => {

    if(Math.random() > 0.5){

        roomLight.classList.add("light-on");

    } else {

        roomLight.classList.remove("light-on");
    }

},3000);
const occupancyPrediction =
document.getElementById(
    "occupancyPrediction"
);

const energyScore =
document.getElementById(
    "energyScore"
);

const confidenceStatus =
document.getElementById(
    "confidenceStatus"
);

setInterval(() => {

    const occupancy =
    Math.floor(Math.random() * 40) + 60;

    const energy =
    Math.floor(Math.random() * 30) + 20;

    occupancyPrediction.innerHTML =
    `${occupancy}%`;

    energyScore.innerHTML =
    `${energy}%`;

    if(occupancy > 80){

        confidenceStatus.innerHTML =
        "VERY HIGH";

        confidenceStatus.style.color =
        "#4ade80";

    } else {

        confidenceStatus.innerHTML =
        "MODERATE";

        confidenceStatus.style.color =
        "#facc15";
    }

},4000);