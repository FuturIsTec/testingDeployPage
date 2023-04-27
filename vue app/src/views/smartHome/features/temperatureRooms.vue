<template>
  <div class="temperature">
    <v-row>
      <v-col class="mt-10" cols="12" md="12">
        <v-card class="mb-5" style="margin-top: 2rem;">
          <v-card-title>
            Living Room Temperature
          </v-card-title>
          <v-card-text class="d-flex align-center justify-center">
            <v-icon color="primary">{{ mdiThermometerLow }}</v-icon>
            <span class="ml-3">{{ livingRoomTemp }} &deg;C</span>
          </v-card-text>
          <v-card-actions>
            <Slider label="adjust temp" style="width: 70%;" v-model="livingRoomTemp" :min="minTemp" :max="maxTemp" />
            <v-btn style="color:brown;font-weight:bold;margin-left: 20px;" @click="setLivingRoomTemp">
              Set Temperature
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="12">
        <v-card class="mb-5">
          <v-card-title>
            Bedroom Temperature
          </v-card-title>
          <v-card-text class="d-flex align-center justify-center">
            <v-icon color="primary">{{ mdiThermometerLow }}</v-icon>
            <span class="ml-3">{{ bedroomTemp }} &deg;C</span>
          </v-card-text>
          <v-card-actions>
            <Slider label="adjust temp" style="width: 70%;" v-model="bedroomTemp" :min="minTemp" :max="maxTemp" />
            <v-btn style="color:brown;font-weight:bold;margin-left: 20px;" @click="setBedroomTemp">
              Set Temperature
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="12">
        <v-card class="mb-5">
          <v-card-title>
            Kitchen Temperature
          </v-card-title>
          <v-card-text class="d-flex align-center justify-center">
            <v-icon color="primary">{{ mdiThermometerLow }}</v-icon>
            <span class="ml-3">{{ kitchenRoomTemp }} &deg;C</span>
          </v-card-text>
          <v-card-actions>
            <Slider label="adjust temp" style="width: 70%;" v-model="kitchenRoomTemp" :min="minTemp" :max="maxTemp" />
            <v-btn style="color:brown;font-weight:bold;margin-left: 20px;" @click="setKitchenTemp">
              Set Temperature
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import { mdiThermometerLow } from '@mdi/js'
import Slider from "@/components/slider.vue";
export default {
  name: 'temperatureRooms',
  components: {
    Slider,
  },
  data() {
    return {
      livingRoomTemp: undefined,
      bedroomTemp: undefined,
      kitchenRoomTemp: undefined,
      mdiThermometerLow,
      minTemp:0,
      maxTemp:120
    }
  },
  methods: {
    setLivingRoomTemp() {
      // code to set the living room temperature
      console.log('Living Room Temperature set to: ' + this.livingRoomTemp)
    },
    setBedroomTemp() {
      // code to set the bedroom temperature
      console.log('Bed Room Temperature set to: ' + this.bedroomTemp)
    },
    setKitchenTemp() {
      // code to set the bedroom temperature
      console.log('Kitchen Room Temperature set to: ' + this.kitchenRoomTemp)
    },
  },
  mounted() {
    this.livingRoomTemp = 23;
    this.bedroomTemp = 25;
    this.kitchenRoomTemp = 121;
    this.minTemp = 0;
    this.maxTemp = 120;
  }
}
</script>

<style scoped>
.temperature {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
