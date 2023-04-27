<!--
Possible Features for this view:

1-Temperature sensors: Display the current temperature in different rooms of the house, and allow the user to adjust the thermostat remotely.

2-Lighting controls: Allow the user to turn lights on and off, and adjust the brightness and color of smart lights in different rooms.

3-Security features: Allow the user to arm and disarm the security system, and view live camera feeds from different parts of the house.

4-Appliance controls: Allow the user to turn appliances on and off remotely, such as the washing machine, dishwasher, or coffee maker.

5-Voice controls: Integrate with a voice assistant like Alexa or Google Assistant to allow the user to control different aspects of their smart home using voice commands.

6-Energy management: Display real-time energy usage data and suggest ways to reduce energy consumption and save money.

7-Irrigation system: Control your home's irrigation system and get notifications when watering is complete.

8-Garage door opener: Open and close your garage door from anywhere.
-->
<template>
  <div class="features">
    <div class="feature lighting" @click="navigateToLighting">
      <i class="fa fa-lightbulb-o"></i>
      <span>Lighting</span>
    </div>
    <div class="feature temperature" @click="navigateToTemperature">
      <i class="fa fa-thermometer-half"></i>
      <span>Temperature</span>
    </div>
    <div class="feature security" @click="navigateToSecurity">
      <i class="fa fa-lock"></i>
      <span>Security</span>
    </div>
    <div class="feature appliances" @click="navigateToAppliances">
      <i class="fa fa-tv"></i>
      <span>Appliances</span>
    </div>
    <div class="feature voice" @click="navigateToVoice">
      <i class="fa fa-microphone"></i>
      <span>Voice</span>
    </div>
    <div class="feature energy" @click="navigateToEnergy">
      <i class="fa fa-bolt"></i>
      <span>Energy</span>
    </div>
    <div class="feature irrigation" @click="navigateToIrrigation">
      <i class="fa fa-tint"></i>
      <span>Irrigation</span>
    </div>
    <div class="feature garage" @click="navigateToGarage">
      <i class="fa fa-car"></i>
      <span>Garage</span>
    </div>
  </div>
</template>

<script>
//import globals from '@/scripts/globals.js';

export default {
  methods: {
    returnToHomePage() {
      // Navigate to the Smart Home feature page
      this.$router.push("/HomeView");
    },
    navigateToLighting() {
      this.$router.push("/lightsControl");
    },
    navigateToTemperature() {
      this.$router.push("/temperatureRooms");
    },
    navigateToSecurity() {

    },
    navigateToAppliances() {

    },
    navigateToVoice() {

    },
    navigateToEnergy() {

    },
    navigateToIrrigation() {

    },
    navigateToGarage() {

    }
  },
  created() {
    console.log("emit update-id-to-page");
    this.$emit('update-id-to-page', '/smartHome');
  }

};
</script>

<style scoped>
.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.features h1 {
  font-size: 3em;
  margin-bottom: 1em;
}

.features .feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  margin: 1em;
  border-radius: 50%;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.features .feature:hover {
  transform: scale(1.1);
  color: rgb(162, 235, 210);
  background-color: rgb(112, 97, 97);
  font-weight: bold;
}

.features .feature i {
  font-size: 4em;
  margin-bottom: 0.5em;
}

.features .feature span {
  font-size: 1.2em;
  text-align: center;
}
</style>
