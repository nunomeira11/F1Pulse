<template>
    <div>
      <Sidenav></Sidenav>
      <div class="main">
        <RouterLink :to="{ name: 'pilotstats' }">Pilotos</RouterLink>
        <RouterLink :to="{ name: 'racestats' }" class="ml-10">Corridas</RouterLink>
        <br><br>
        <div class="container">
          <div class="select-container">
            <button @click="decreaseSelection">-</button>
            <select v-model="selectedConstructor" @change="handleConstructorChange" style="color: #FFF; padding-left: 60px;">
              <option v-for="(constructor, index) in constructorStore.$state.constructors" :key="index" :value="constructor" style="color: black;">
                {{ constructor.name }}
              </option>
            </select>
            <button @click="increaseSelection">+</button>
          </div>
  
        <div v-if="selectedConstructor">
          <!--<h1>{{ selectedConstructor.name }}</h1>
          <p>{{ selectedConstructor.nationality }}</p>-->
  
          <!-- Display drivers associated with the selected constructor -->
          <div class="pilots-container">
            <div v-for="(driver, index) in selectedConstructor.drivers" :key="index" class="driver-info">
              <img :src="`../src/img/drivers/all/${driver.driverId}.png`" alt="" class="driver-photo" style="width: 50%;">
              <div class="name-container">
                {{ driver.givenName }}
                <span :style="{ color: getTeamColor(driver.driverId) }">{{ driver.familyName }}</span>
              </div>
              <div class="number">{{ driver.permanentNumber }}</div>
              <img :src="`../src/img/drivers/flags/${driver.nationality}.png`"  alt="" class="nationality">
            </div>
          </div>
          <div class="info-container">
            <div class="info-item" v-for="info in infoArray" :key="info.id">
              <!-- info -->
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidenav from "../components/sidenav.vue";
  import { useConstructorStore } from "@/stores/constructor";
  import { usePilotStore } from "@/stores/pilot";
  
  export default {
    data() {
      return {
        constructorStore: useConstructorStore(),
        pilotStore: usePilotStore(),
        selectedConstructor: null,
        newImg: null,
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
      this.constructorStore.fetchConstructors();
      this.pilotStore.fetchPilots();
    },
    methods: {
      pilotPhoto(driveName){
        newImg=`../img/drivers/${driveName}.jpg`
        return newImg
      },
      handleConstructorChange() {
        // This function will be called when the selected constructor changes
        console.log(this.selectedConstructor);
  
        // Manually associate drivers with the selected constructor
        this.associateDriversWithConstructor();
      },
      associateDriversWithConstructor() {
        if (this.selectedConstructor && this.selectedConstructor.name) {
          // Create a mapping between constructor names and associated drivers
          const driverMapping = {
            "mercedes": ["hamilton", "russell"],
            "red bull": ["max_verstappen", "perez"],
            "ferrari": ["leclerc", "sainz"],
            "mclaren": ["norris", "piastri"],
            "aston martin": ["alonso", "stroll"],
            "alfa romeo": ["bottas", "zhou"],
            "williams": ["albon", "sargeant"],
            "haas f1 team": ["kevin_magnussen", "hulkenberg"],
            "alphatauri": ["tsunoda", "ricciardo"],
            "alpine f1 team": ["gasly", "ocon"],
          };

          // Retrieve drivers based on the selected constructor name
          const drivers = driverMapping[this.selectedConstructor.name.toLowerCase()] || [];

          this.selectedConstructor.drivers = drivers.map(driverName => {
            console.log("DRIVER NAME: "+driverName);
            console.log("P: "+this.pilotStore.$state.pilots.map(p => p.driverId))
            // Find the pilot with the matching name
            const pilot = this.pilotStore.$state.pilots.find(p => p.driverId && p.driverId.toLowerCase() === driverName);
            console.log("OBJETo PilotO: "+pilot);
            
            // If a matching pilot is found, return the pilot object; otherwise, return an object with just the driver name
            return pilot || { name: driverName };
          });
        }
      },
      getTeamColor(driverName) {
        for (let team in this.driverMapping) {
          if (this.driverMapping[team].includes(driverName)) {
            return this.teamColors[team];
          }
        }
        return null;
      },
      decreaseSelection() {
        const index = this.constructorStore.$state.constructors.indexOf(this.selectedConstructor);
        if (index > 0) {
          this.selectedConstructor = this.constructorStore.$state.constructors[index - 1];
        }
      },
      increaseSelection() {
        const index = this.constructorStore.$state.constructors.indexOf(this.selectedConstructor);
        if (index < this.constructorStore.$state.constructors.length - 1) {
          this.selectedConstructor = this.constructorStore.$state.constructors[index + 1];
        }
      },

    },
    components: {
      Sidenav,
    },
  };
  </script>
  <style scoped>
  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 3fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    }
    
    .div1 { grid-area: 1 / 1 / 2 / 2; }
    .div2 { grid-area: 1 / 2 / 2 / 3; }
    .div3 { grid-area: 1 / 3 / 2 / 4; }
    .div4 { grid-area: 2 / 1 / 3 / 4; }


    .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.select-container {
  margin-bottom: 20px;
}

.pilots-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.info-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.info-item {
  flex: 1 0 20%; /* This will make each info item take up 20% of the container's width, and there will be 4 items per row */
  margin: 10px;
}

.driver-info{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 40px; /* This will give each .driver-info item a left and right margin of 20px */
}
.name-container {
  display: flex;
  font-family: 'Onest-Bold';
  font-size: 45px;
  color:#fff;
}
.name-container span {
  margin-left: 10px; /* This will give a left margin of 10px to the family name */
}

.number{
  font-family: 'Onest-Bold';
  font-size: 45px;
  color:#fff;
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

.nationality{
  width: 10%;
}
  </style>
  