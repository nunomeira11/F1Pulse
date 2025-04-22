<!-- SeuComponente.vue -->

<template>
  <Sidenav></Sidenav>
  <div class="main">
    <v-table class="table">
      <thead>
        <tr>
          <th colspan="5" class="text-center">Distance: {{ tableData.distance }}</th>
        </tr>
        <tr>
          <th class="text-left"></th>
          <th class="text-left"></th>
          <th class="text-left">Tempo</th>
          <th class="text-left">Pneus</th>
          <th class="text-left">PitStops</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pilot, position) in tableData.pilots" :key="position">
          <td style="border-radius: 20px 0px 0px 20px;">
            <div class="team" :style="{ '--team-color': getTeamColor(pilot.name) }">
              <img :src="carByPilot(pilot.name)" alt="car">
            </div>
          </td>
          <td class="thin">{{ capitalize(pilot.firstname) }} <span class="bold">{{ capitalize(pilot.name) }}</span></td>
          <td v-if="position < 1">{{ tableData.time }}</td>
          <td v-else>+ {{ pilot.time }}</td>
          <td>
            <img :src=pilot.tyre alt="tyre" style="height:25px ;width: auto;">
          </td>
          <td style="border-radius: 0px 20px 20px 0px;">{{ pilot.pitstops }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import mockData from "@/api/mocks/mock";
import Sidenav from "../components/sidenav.vue";

export default {
  data() {
    return {
      currentIndex: 0,
      driverMapping: {
        "mercedes": ["hamilton", "russel"],
        "red bull": ["verstappen", "perez"],
        "ferrari": ["leclerc", "sainz"],
        "mclaren": ["norris", "piastri"],
        "aston martin": ["alonso", "stroll"],
        "alfa romeo": ["bottas", "zhou"],
        "williams": ["albon", "sargeant"],
        "haas f1 team": ["magnussen", "hulkenberg"],
        "alphatauri": ["tsunoda", "devries"],
        "alpine f1 team": ["gasly", "ocon"],
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
      intervalId: null,
    };
  },
  created() {
    if (sessionStorage.getItem('finishedRace') === 'true') {
      this.tableData.distance = 100;
      this.currentIndex = 10
      this.updateTable();
    } else {
      this.intervalId = setInterval(this.updateTable, 1000);
    }
  },
  methods: {
    updateTable() {
      if (this.tableData.distance === 100) {
        clearInterval(this.intervalId);
        return;
      }

      this.currentIndex++;
      if (this.currentIndex >= mockData.length) {
        this.currentIndex = 0;
      }

      const currentPilot = this.tableData.pilots[0].name;
      this.currentTeamColor = this.getTeamColor(currentPilot);
    },
    getCurrentMock() {
      return mockData[this.currentIndex];
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
    capitalize(text) {
      if (!text) return '';
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
  },
  components: {
    Sidenav,
  },
  computed: {
    tableData() {
      return this.getCurrentMock();
    },
  },
  watch: {
    'tableData.distance'(newDistance) {
      if (newDistance === 100) {
        sessionStorage.setItem('finishedRace', 'true');
      }
    },
  },
};
</script>

<style scopped>
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

td img {
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
</style>
