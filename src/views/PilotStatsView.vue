<template>
  <div>
    <Sidenav></Sidenav>
    <div class="main">
      <RouterLink :to="{ name: 'racestats' }">Corridas</RouterLink>
      <RouterLink :to="{ name: 'constructorstats' }" class="ml-10">Equipas</RouterLink>
      <br>
      <br>
      <div class="profile-container">
        <div class="photo-select">
          <div class="driver-photo-container">
            <img :src="`../src/img/drivers/all/${selectedPilot.driverId}.png`" alt="" class="driver-photo">
          </div>
            <div class="select-container">
              <button @click="previousPilot">&lt;</button>
              <select v-model="selectedPilot" @change="handlePilotChange" style="color: #FFF; padding-left: 60px;padding-right:60px;">
                <option v-for="(pilot, index) in pilotStore.$state.pilots" :key="index" :value="pilot" style="color: black;">
                  {{ pilot.permanentNumber }} {{ pilot.givenName }} {{ pilot.familyName }}
                </option>
              </select>
              <button @click="nextPilot">></button>
            </div>
        </div>
        <div class="info-driver">
<div class="div1">

          <div class="info-row">
            <p class="name">
              {{ selectedPilot.permanentNumber }} 
              {{ selectedPilot.givenName }} 
              <span :style="{ color: getTeamColor(selectedPilot.driverId) }">{{ selectedPilot.familyName }}</span>
            </p>
          </div> 
          <div class="info-row" style="font-size: 15px; display: flex;">
            <p><span class="sub-title">Data Nascimento</span> {{ selectedPilot.dateOfBirth }}</p>
            <p><span class="sub-title">Nacionalidade</span> <img :src="`../src/img/drivers/flags/${selectedPilot.nationality}.png`"  alt="" class="nacionality"></p>
          </div>
</div>
<div class="div2"> </div>
<div class="div3"> 
          <div class="info-row premios">
            <div class="info-item">
              <div class="number" :style="{ color: getTeamColor(selectedPilot.driverId) }">2</div>
              <div class="legenda">Campeão do Mundo</div>
            </div>
            <div class="info-item">
              <div class="number" :style="{ color: getTeamColor(selectedPilot.driverId) }">102</div>
              <div class="legenda">Vitorias</div>
            </div>
            <div class="info-item">
              <div class="number" :style="{ color: getTeamColor(selectedPilot.driverId) }">90</div>
              <div class="legenda">Poles</div>
            </div>
            <div class="info-item">
              <div class="number" :style="{ color: getTeamColor(selectedPilot.driverId) }">100</div>
              <div class="legenda">Podios</div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "../components/sidenav.vue";
import { usePilotStore } from "@/stores/pilot";
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      pilotStore: usePilotStore(),
      selectedPilot: 1,
      driverMapping: {
        "mercedes": ["hamilton", "russell"],
        "red bull": ["max_verstappen", "perez"],
        "ferrari": ["leclerc", "sainz"],
        "mclaren": ["norris", "piastri"],
        "aston martin": ["alonso", "stroll"],
        "alfa romeo": ["bottas", "zhou"],
        "williams": ["albon", "sargeant"],
        "haas f1 team": ["kevin_magnussen", "hulkenberg"],
        "alphatauri": ["tsunoda", "de_vries", "ricciardo","lawson"],
        "alpine f1 team": ["gasly", "ocon"],
      },
      teamColors: {
        "mercedes": "rgba(26, 220, 213, 1)",
        "red bull": "rgba(2, 16, 120, 0.87)",
        "ferrari": "rgba(245, 0, 0, 0.8)",
        "mclaren": "rgba(254, 136, 4, 0.87)",
        "aston martin": "rgba(0, 88, 80, 0.87)",
        "alfa romeo": "rgba(127, 0, 0, 0.87)",
        "williams": "rgba(5, 160, 227, 0.87)",
        "haas f1 team": "rgba(223, 44, 44, 0.87)",
        "alphatauri": "rgba(14, 22, 35, 0.87)",
        "alpine f1 team": "rgba(15, 28, 44, 1)",
      },
    };
  },
  created() {
    this.pilotStore.fetchPilots();
  },
  methods: {
    handlePilotChange() {
      // This function will be called when the selected pilot changes
      console.log(this.selectedPilot);
    },
    getTeamColor(driverName) {
      for (let team in this.driverMapping) {
        if (this.driverMapping[team].includes(driverName)) {
          return this.teamColors[team];
        }
      }
      return null;
    },
    previousPilot() {
      const index = this.pilotStore.$state.pilots.indexOf(this.selectedPilot);
      if (index > 0) {
        this.selectedPilot = this.pilotStore.$state.pilots[index - 1];
      }
    },
    nextPilot() {
      const index = this.pilotStore.$state.pilots.indexOf(this.selectedPilot);
      if (index < this.pilotStore.$state.pilots.length - 1) {
        this.selectedPilot = this.pilotStore.$state.pilots[index + 1];
      }
    },
  },
  components: {
    Sidenav,
  },
};
</script>

<style scoped>
.main{
  color: #FFF;
}
.profile-container {
  display: flex;
}

.profile-container > div {
  margin-right: 20px;
}

.info-row {
  display: flex;
  justify-content: space-between;
}

.nacionality {
  width: 10%;
  border-radius: 5px;
  align-self: flex-end;
  margin-right: 10px;
}

.name{
  font-family: 'Onest-Bold';
  font-size: 45px;
  color: #FFF;
}

.photo-select{
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-driver{
  min-width: 600px;
}

.driver-photo-container {
  position: relative;
  width: 500px;  /* Substitua pelo tamanho desejado */
  height: 500px; /* Substitua pelo tamanho desejado */
}

.driver-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.driver-photo-container::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to top, rgba(40,41,41,1), rgba(40,41,41,0));
}
.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-driver {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 3 / 1 / 4 / 2; align-self: flex-end; }

.number{
  font-family: 'Onest-Bold';
  font-size: 40px;
}

.legenda{
  font-family: 'Onest-Light';
  font-size: 15px;
}

.select-container {
  display: flex;
  align-items: center;
}

.sub-title{
  font-family: 'Onest-Bold';
  font-size: 15px;
}
</style>