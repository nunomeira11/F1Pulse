<template>
  <div>
    <Sidenav></Sidenav>
    <div class="main">
      <center><h1>Corrida</h1></center>
          <form action="" class="race-form">
            
            <button type="button" @click="decrementRace">&lt;</button>
            <select id="sltRace" v-model="i" @change="standingStore.fetchStandings(this.year,i)" style="color: white;">
              <option
                :value="index + 1"
                v-for="(race, index) in standingStore.races"
                :key="race.round"
                style="color: black;"
              >
                {{ race.Circuit.circuitName }}
              </option>
            </select>
            <button type="button" @click="incrementRace">></button>
          </form>  
          <v-data-table-virtual
  class="table"
  :headers="headers"
  :items="virtualPilots"
  item-value="name"
>
  <template v-slot:item.position="{ item }">
    <div class="team" :style="{ '--team-color': getTeamColor(item.name) }">
      <img :src="carByPilot(item.name)" alt="car">  
    </div>
  </template>

  <template v-slot:item.name="{ item }">
    {{ item.name }}
  </template>

  <template v-slot:item.time="{ item }">
    {{ item.time }}
  </template>
</v-data-table-virtual>
    </div>
  </div>
</template>

<script>
import Sidenav from "../components/sidenav.vue";
import { useStandingStore } from "@/stores/standing";
export default {
  data() {
    return {
      standingStore: useStandingStore(),
      year: 2023,
      i:1,
      headers: [
        { title: "Position", align: "start", key: "position" },
        { title: "Name", align: "start", key: "name" },
        { title: "Time", align: "end", key: "time" },
      ],
      driverMapping: {
        "mercedes": ["Hamilton", "Russell"],
        "red bull": ["Verstappen", "Pérez"],
        "ferrari": ["Leclerc", "Sainz"],
        "mclaren": ["Norris", "Piastri"],
        "aston martin": ["Alonso", "Stroll"],
        "alfa romeo": ["Bottas", "Zhou"],
        "williams": ["Albon", "Sargeant"],
        "haas f1 team": ["Magnussen", "Hülkenberg"],
        "alphatauri": ["Tsunoda", "de Vries"],
        "alpine f1 team": ["Gasly", "Ocon"],
      },
      teamColors: {
        "mercedes": "rgba(6, 157, 152, 0.8)",
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
      imgCar: null,
    };
  },
  created() {
    this.standingStore.fetchYears();
    this.standingStore.fetchRaces(this.year);

    try {
      this.standingStore.fetchStandings(this.year, this.i);
    } catch (error) {
      alert(error.message);
    }
  },
  methods: {
  incrementRace() {
    if (this.i < this.standingStore.races.length - 1) {
      this.i++;
      this.standingStore.fetchStandings(this.year, this.i);
    }
  },
  decrementRace() {
   if (this.i === 1) {
      return;
    }
    this.i--;
    this.standingStore.fetchStandings(this.year, this.i);
  },
  carByPilot(driverName) {
      for (let team in this.driverMapping) {
        if (this.driverMapping[team].includes(driverName)) {
          this.imgCar = `../src/img/cars/${team}.png`;
          return this.imgCar;
        }
      }
      return null;
    },
    getTeamColor(driverName) {
      for (let team in this.driverMapping) {
        if (this.driverMapping[team].includes(driverName)) {
          return this.teamColors[team];
        }
      }
      return null;
    },
},

  components: {
    Sidenav,
  },
  computed: {
    virtualPilots() {
      const standings = this.standingStore.getStandings;
      return standings
        ? standings.map((standing, index) => ({
            position: index + 1,
            name: standing.Driver.familyName,
            time: standing.Time ? standing.Time.time : "Not Finished",
          }))
        : [];
    },
  },
  watch: {
    year(newYear) {
      this.standingStore.fetchRaces(newYear);
    },
  },
};

</script>

<style lang="scss" scoped>
  
.v-table__wrapper {
  margin-bottom: 20px !important;
}
.table {
  background: rgba(0, 0, 0, 0) !important;
  color: white !important; 
}

.table tbody tr:nth-child(odd) td {
  background-color: rgba(217, 217, 217, 0.17);
}

.table tbody tr:nth-child(even) td {
  background-color: rgba(0, 0, 0, 0);
}

img {
  width: 150px;
  height: 40px;
}

.team {
  position: relative;
  max-width: 160px;
  z-index: 1;
}

.team::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 35%;
  background-color: var(--team-color, rgba(255, 0, 225, 0.738));
  transform: skew(-15deg);
  z-index: -1;
}
.race-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.race-button {
  margin: 0 10px;
}
</style>

