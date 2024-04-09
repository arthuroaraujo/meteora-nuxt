<template>
  <v-card elevation="2">
    <div class="wind">
      <div class="date-inputs">
        <!-- <input type="date" class="custom-date-input" v-model="startDate">
          <input type="date" class="custom-date-input" v-model="endDate"> -->
      </div>
      <!-- <button class="custom-button" @click="fetchWeatherData">Buscar Dados de Vento</button> -->
    </div>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchWeatherData } from "@/services/OpenMeteoService";

export default defineComponent({
  name: "Wind",
});
</script>
