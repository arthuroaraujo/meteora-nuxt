<template>
    <div class="precipitation-page">
      <h1>Precipitação</h1>
      <Precipitation :start-date.sync="startDate"
        :end-date.sync="endDate"/>
    </div>
  </template>
    
  <script lang="ts">
  import { fetchWeatherData } from '@/services/OpenMeteoService';
  import Precipitation from '~/components/precipitation.vue';
  
  
  export default {
    components: {
      Precipitation,
  },
    data() {
      return {
        startDate: '',
        endDate: ''
      }
    },
    methods: {
      async fetchMethod() {
        try {
          const response = await fetchWeatherData({
            startDate: this.startDate,
            endDate: this.endDate});
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
        }
      }
    }
  }
  </script>