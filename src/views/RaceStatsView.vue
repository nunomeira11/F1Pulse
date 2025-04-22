<template>
    <div>
      <Sidenav></Sidenav>
      <div class="main">
        <RouterLink :to="{ name: 'pilotstats' }">Pilotos</RouterLink>
        <RouterLink :to="{ name: 'constructorstats' }" class="ml-10">Equipas</RouterLink>
        <br><br>
        <select v-model="selectedRace" @change="handleRaceChange" style="border: 1px solid white;">
          <option v-for="(race, index) in raceStore.$state.races" :key="index" :value="race">
            {{ race.circuitName }}
          </option>
        </select>
  
        <div v-if="selectedRace">
          <h1>{{ selectedRace.circuitName }}</h1>
          <p>{{ selectedRace.Location.country }}</p>
          <p>{{ selectedRace.Location.locality }}</p>
          <img :src="`../src/img/circuitos/${selectedRace.Location.country.toLowerCase()}.png`">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidenav from "../components/sidenav.vue";
  import { useRaceStore } from "@/stores/race";
  export default {
    data() {
      return {
        raceStore: useRaceStore(),
        selectedRace: null,
      };
    },
    created() {
      this.raceStore.fetchRaces();
    },
    methods: {
      handleRaceChange() {
        // This function will be called when the selected pilot changes
        console.log(this.selectedRace);
      },
    },
    components: {
      Sidenav,
    },
  };
  </script>