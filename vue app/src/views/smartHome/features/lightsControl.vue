<template>
  <div class="lights-control">
    <h2 class="lights-title">Lights Control</h2>
    <div class="lights">
      <div class="light" v-for="(light, index) in lights" :key="index">
        <div class="light-header">
          <div class="light-name">{{ light.name }}</div>
          <div class="light-toggle">
            <input type="checkbox" :id="'light-toggle-' + index" v-model="light.isOn" @change="setLightStatus(index)" />
            <label :for="'light-toggle-' + index"></label>
          </div>
        </div>
        <div class="light-body">
          <div class="brightness-slider">
            <div class="slider-label">Brightness</div>
            <input type="range" min="0" max="100" v-model="light.brightness" @change="setLightBrightness(index)" />
          </div>
          <div class="color-picker">
            <div class="color-picker-label">Color</div>
            <input type="color" v-model="light.color" @change="setLightColor(index)" />
          </div>
          <div class="temperature-slider">
            <div class="slider-label">Temperature</div>
            <input type="range" min="0" max="100" v-model="light.temperature" @change="setLightTemperature(index)" />
          </div>
          <div class="light-timer">
            <div class="timer-label">Timer</div>
            <input type="number" v-model="light.timer" @change="setLightTimer(index)" />
            <select v-model="light.timerUnit">
              <option value="seconds">Seconds</option>
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
            </select>
            <button @click="startLightTimer(index)">Start</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  sendWebSocketMessage,
  receiveWebSocketMessage,
  closeWebSocketConnection,
} from "@/scripts/websocket.js";

export default {
  name: "lights-control",
  data() {
    return {
      lights: [
        {
          name: "Living Room",
          isOn: false,
          brightness: 0,
          color: "#ffffff",
          temperature: 0,
          timer: 0,
          timerUnit: "seconds",
          timerId: null,
        },
        {
          name: "Bedroom",
          isOn: false,
          brightness: 0,
          color: "#ffffff",
          temperature: 0,
          timer: 0,
          timerUnit: "seconds",
          timerId: null,
        },
        {
          name: "Kitchen",
          isOn: false,
          brightness: 0,
          color: "#ffffff",
          temperature: 0,
          timer: 0,
          timerUnit: "seconds",
          timerId: null,
        },
      ],
    };
  },
  methods: {
    setLightStatus(index) {
      console.log(
        `Light ${index} is now ${this.lights[index].isOn ? "on" : "off"}`
      );

      let message = {
        pageId: "lightsControl",
        pageParams: {
          eventId: "bedroom",
          eventValue: this.lights[index].isOn == true ?  "on" : "off"
        }
      };

      let jsonString = JSON.stringify(message);
      //let jsonMessage = JSON.stringify(jsonString);
      console.log(jsonString);
      this.sendMessageToWebSocket(jsonString);
    },
    setLightBrightness(index) {
      console.log(
        `Light ${index} brightness set to ${this.lights[index].brightness}`
      );
    },
    setLightColor(index) {
      console.log(`Light ${index} color set to ${this.lights[index].color}`);
    },
    setLightTemperature(index) {
      console.log(
        `Light ${index} temperature set to ${this.lights[index].temperature}`
      );
    },
    setLightTimer(index) {
      console.log(`Light ${index} Timer set to ${this.lights[index].timer}`);
    },
    startLightTimer(index) {
      console.log(`Light ${index} Timer set to ${this.lights[index].timer}`);
    },
    sendMessageToWebSocket(msg) {
      sendWebSocketMessage(msg);
    },
    closeWebSocket() {
      closeWebSocketConnection();
    },
  },
  mounted() {
    receiveWebSocketMessage((data) => {
      console.log("Received message: ", data);
    });
  },
};
</script>

<style>
/* Base styles */
.lights-title {
  color: rgba(124, 211, 252, 0.884);
}

.lights-control {
  font-family: sans-serif;
  margin: 2rem;
}

.lights {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
}

.light {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  overflow: hidden;
  width: calc(33.33% - 1rem);
}

.light-header {
  align-items: center;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}

.light-name {
  font-size: 1.25rem;
  font-weight: bold;
}

.light-toggle {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

.light-toggle input[type="checkbox"] {
  display: none;
}

.light-toggle label {
  background-color: #ccc;
  border-radius: 1rem;
  cursor: pointer;
  display: inline-block;
  height: 1.5rem;
  position: relative;
  width: 3rem;
}

.light-toggle label::before {
  background-color: #fff;
  border-radius: 50%;
  content: "";
  height: 1.25rem;
  left: 0.25rem;
  position: absolute;
  top: 0.25rem;
  transition: transform 0.2s;
  width: 1.25rem;
}

.light-toggle input:checked+label::before {
  transform: translateX(1.5rem);
}

.light-body {
  display: block;
  padding: 1rem;
}

.light.open .light-body {
  display: block;
}

.brightness-slider,
.color-picker,
.temperature-slider,
.light-timer {
  margin-top: 1rem;
}

.slider-label,
.color-picker-label,
.timer-label {
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: rgba(124, 211, 252, 0.884);
}

.brightness-slider input[type="range"],
.temperature-slider input[type="range"] {
  appearance: none;
  background-color: #ddd;
  border-radius: 0.5rem;
  height: 0.25rem;
  margin-bottom: 1rem;
  outline: none;
  width: 100%;
}

.brightness-slider input[type="range"]::-webkit-slider-thumb,
.temperature-slider input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  height: 1rem;
  width: 1rem;
}

.color-picker input[type="color"] {
  appearance: none;
  border: none;
  height: 2rem;
  margin-bottom: 1rem;
  width: 100%;
}

.light-timer input[type="number"] {
  appearance: none;
  border: none;
  border-radius: 0.5rem;
  height: 1rem;
  margin-right: 0.5rem;
  outline: none;
  padding: 1rem;
  text-align: center;
  width: 5rem;
  color: black;
  background-color: white;
}

.light-timer button {
  background-color: #007bff;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s;
}

.light-timer button:hover {
  background-color: #0062cc;
}

.light-timer button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.light-timer select {
  appearance: none;
  background-color: #eee;
  border: none;
  border-radius: 0.5rem;
  height: 2rem;
  outline: none;
  padding: 0 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 8rem;
}

.light-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10rem;
}

.light-actions button {
  background-color: #4caf50;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
}

.light-actions button:hover {
  background-color: #3e8e41;
}

@media (max-width: 1000px) {
  .light {
    width: calc(50% - 1rem);
  }
}

@media (max-width: 700px) {
  .lights {
    justify-content: center;
  }

  .light {
    width: 100%;
  }

  .light-timer button {
    margin-left: 0.2rem;
    padding: 0.3rem 0.4rem;
  }
}

@media (max-width: 420px) {
  .lights {
    justify-content: center;
  }

  .light {
    width: 100%;
  }

  .light-timer button {
    margin-left: 0.2rem;
    padding: 0.3rem 0.4rem;
  }

  .light-timer input[type="number"] {
    height: 1rem;
    width: 3rem;
  }

  .light-timer select {
    width: 6rem;
  }
}
</style>
