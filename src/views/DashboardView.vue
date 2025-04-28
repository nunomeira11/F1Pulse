<template>
    <Sidenav></Sidenav>
        <div class="main">
            <div class="profile">
    <v-menu :location="location">
      <template v-slot:activator="{ props }">
        <v-btn
          size="small"
          color="primary"
          dark
          v-bind="props"
          class="profile-button"
        >
        {{ user.username}}
            <img :src="`../src/img/avatars/${store.user.avatarNumber}.png`" alt="avatar" class="avatar">
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-btn size="small" @click="perfil">Perfil</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn size="small" @click="logout">Logout</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
            </div>
            <div class="parent">
                <div class="div1">NOTIFICAÇOES 
                  <v-alert v-if="raceFinished"
                          color="#D9D9D9"
                          theme="dark"
                          density="compact"
                          closable
                          :style="{ fontSize: '15px', width: '350px', margin: '10px', 'margin-left': '25px' }"
                  >
                    <div style="display: flex; align-items: center;">
                      <div style="display: inline-flex; border-radius: 50%; background: #BCBCBC; padding: 10px; align-items: center; justify-content: center; margin-right: 10px;">
                        <v-icon>mdi-flag-checkered</v-icon>
                      </div>
                      <span>A corrida ao vivo terminou!</span>
                    </div>
                  </v-alert>
                </div>
                <div class="div2">
                  <div class="month">
      <button @click="previousMonth">&lt;</button>
      {{ monthNames[currentMonth.getMonth()] }}
      <button @click="nextMonth">&gt;</button>
    </div>
    <RouterLink :to="{ name: 'calendar' }">
      <div class="calendar-grid">
        <div 
          class="day" 
          v-for="day in getDaysInMonth(currentMonth)" 
          :key="day"
          :style="getDayStyle(day)"
        >
          {{ day }}
        </div>
      </div>
    </RouterLink>
                </div>
                <div class="div3">
                  <div style="font-size: 25px; font-family: 'Onest-Bold';color: #D4CBCA;">F1 Rumo à Sustentabilidade</div>
                  <p class="gradient-text"  style="font-size: 13px; font-family: 'Onest-Thin';color: #D4CBCA;">As equipas de Fórmula 1 estão a dar um passo inovador em direção à sustentabilidade. Em uma iniciativa pioneira, várias equipas do grid anunciaram a adoção de tecnologias mais ecológicas em seus processos de fabricação e operações durante as corridas. Essa mudança visa reduzir a pegada de carbono e promover práticas mais sustentáveis no mundo da F1.</p>
                </div>
                <RouterLink :to="{ name: 'standings' }" class="div4">
                  Classificaçao Geral
                  <div class="grid-geral">
                    <img src="../img/components/main/Leclerc.png" alt="">
                    <img src="../img/components/main/Hamilton.png" alt="">
                    <img src="../img/components/main/Verstappen.png" alt="">
                  </div>
                </RouterLink>
                <div class="div5">
                  <img src="../img/components/fantasy/Piloto Fantasy.png" style="height: 100%;">
                  <img src="../img/components/fantasy/logo fantasy 1.png" style="width: 40%;">
                  <img src="../img/components/fantasy/Car Fantasy 2.png" style="position: relative;left: 10%;">
                </div> 
                <div class="div6" :style="{ background: getTeamColor(favDriver.permanentNumber), backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
                  <div class="driver-number">{{ favDriver.permanentNumber }}</div>
                  <img :src="`../src/img/drivers/all/${favDriver.driverId}.png`" alt="">
                  <div class="names">
                    <div class="givenName">{{ favDriver.givenName }}</div>
                    <div class="familyName">{{ favDriver.familyName }}</div>
                  </div>
                </div>
            </div>
        </div>       
</template>

<script>
import { useUserStore } from "@/stores/user";
import { usePilotStore } from "@/stores/pilot";
import { useCalendarStore } from '../stores/calendar.js';
import { format, addMonths, subMonths, getDaysInMonth } from 'date-fns'
import { RouterLink } from 'vue-router';
import Sidenav from "../components/sidenav.vue";
export default { 
    data() {
        return {
            store: useUserStore(),
            pilotStore: usePilotStore(),
            calendarStore: useCalendarStore(),
            driverMapping: {
              "mercedes": ["hamilton", "russell"],
              "red bull": ["max_verstappen", "perez"],
              "ferrari": ["leclerc", "sainz"],
              "mclaren": ["norris", "piastri"],
              "aston martin": ["alonso", "stroll"],
              "alfa romeo": ["bottas", "zhou"],
              "williams": ["albon", "sargeant"],
              "haas f1 team": ["kevin_magnussen", "hulkenberg"],
              "alphatauri": ["tsunoda", "devries" ,"ricciardo"],
              "alpine f1 team": ["gasly", "ocon"],
            },
            teamColors: {
              "mercedes": ["rgba(6, 157, 152, 0.8)", "rgba(14, 29, 33, 0.8)"],
              "red bull": ["rgba(28, 38, 57, 0.8)", "rgba(116, 32, 47, 0.8)"],
              "ferrari": ["rgba(166,4,4,0.8)","rgba(0,0,0,0.8)"],
              "mclaren": ["rgba(254,136,4,0.8)", "rgba(0,0,0,0.8)"],
              "aston martin": ["rgba(0,88,80,0.8)", "rgba(5,27,6,0.8)"],
              "alfa romeo": ["rgba(127,0,0,0.8)", "rgba(0,0,0,0.8)"],
              "williams": ["rgba(5,160,227,0.8)", "rgba(0,0,0,0.8)"],
              "haas f1 team": ["rgba(223, 44, 44, 0.87)", "rgba(0,0,0,0.8)"],
              "alphatauri": ["rgba(14, 22, 35, 0.87)", "rgba(0,0,0,0.8)"],
              "alpine f1 team":["rgba(15, 28, 44,0.8)", "rgba(0,0,0,0.8)"],
            },
            currentMonth: new Date(),
            monthNames: Array.from({length: 12}, (v, i) => {
              let month = new Date(2000, i).toLocaleString('pt-BR', {month: 'long'});
              return month.charAt(0).toUpperCase() + month.slice(1);
            }),
        };
    },

    computed: {
        user() {
        return this.store.getUser;
        },
        raceFinished() {
          return sessionStorage.getItem('finishedRace') === 'true';
        },
        pilots() {
          return usePilotStore().getPilots;
        },
        favDriver() {
          if (!this.pilots || !this.user) {
            return null;
          }

          const foundPilot = this.pilots.find(pilot => {
            console.log('Pilot:', pilot.givenName);
            console.log('User:', this.user.favDriver);
            return pilot.givenName === this.user.favDriver;
          });

          console.log('Found pilot:', foundPilot);
          return foundPilot;
        },
        formattedMonth() {
          return format(this.currentMonth, 'MMMM')
        },
        races() {
          return this.calendarStore.getRaces
        }
    },

    components: {
        Sidenav,
    },
    
    mounted() {
      this.calendarStore.fetchRaces()
    },

    created() {
     this.pilotStore.fetchPilots();
    },

    methods: {
        logout() {
        this.store.logout();
        this.$router.push({ name: "home" });
      },
      perfil() {
        this.$router.push({ name: "perfil" });
      },
      getTeamColor(driverName) {
        for (let team in this.driverMapping) {
          if (this.driverMapping[team].includes(driverName)) {
            let colorPair = this.teamColors[team];
            return `linear-gradient(${colorPair[0]}, ${colorPair[1]}), url(../src/img/backgrounds/backStats.png)`;
          }
        }
        return null;
      },
      previousMonth() {
      this.currentMonth = subMonths(this.currentMonth, 1)
    },
    nextMonth() {
      this.currentMonth = addMonths(this.currentMonth, 1)
    },
    getDaysInMonth(date) {
      const days = []
      for (let i = 1; i <= getDaysInMonth(date); i++) {
        days.push(i)
      }
      return days
    },
    getDayStyle(day) {
      if (this.races) {
        const year = this.currentMonth.getFullYear();
        const month = this.currentMonth.getMonth();
        console.log(this.races)
        console.log(day)
        const race = this.races.find(race => format(new Date(race.date), 'yyyy-MM-dd') === format(new Date(year, month, day), 'yyyy-MM-dd'))
        console.log(race)
        if (race) {
          return {
            background: `linear-gradient(rgba(91, 91, 91, 0.7), rgba(91, 91, 91, 0.7)), url(../src/img/flags/${race.Circuit.Location.country.toLowerCase()}.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }
        }
      }
      return {}
    }
    },
};
</script>

<style scoped>
.parent {
        position: relative;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    text-align: center;
    height: 88vh;
    top: -4vh;
}

.div1,.div2,.div3,.div4,.div5,.div6 {
border-radius:10px
}
.div1 { grid-area: 1 / 5 / 4 / 7;
  background: 
    linear-gradient(rgba(54, 70, 82, 0.35), rgba(54, 70, 82, 0.35)), 
    url('../img/backgrounds/backNotification.png');
 }
 .div2 {
  grid-area: 4 / 5 / 7 / 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: 
    linear-gradient(rgba(73, 73, 73, 0.90), rgba(73, 73, 73, 0.90)), 
    url('../img/backgrounds/backCalendario.png');
}
.div3 { grid-area: 4 / 3 / 7 / 5;
  background-image:
   linear-gradient( rgba(65, 65, 65, 0),rgba(0, 0, 0, 1)),
   url('../img/backgrounds/News Photo.png');
  background-size: cover; /* ou 'contain' se você quiser que a imagem se ajuste dentro da div */
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.gradient-text {
    position: relative;
  }

  .gradient-text::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(65, 65, 65, 0) 0%, rgba(0, 0, 0, 1) 100%);
    border-radius: 10px;
  }
.div4 { grid-area: 4 / 1 / 7 / 3;
  background:
  linear-gradient(rgba(49, 49, 49, 0.67),rgba(49, 49, 49, 0.67)),
  url('../img/backgrounds/backGeral.png');
}
.div5 {
  grid-area: 3 / 1 / 4 / 5;
  background-image: url('../img/backgrounds/backFantasy.jpg');
  background-size: cover; /* ou 'contain' se você quiser que a imagem se ajuste dentro da div */
  background-repeat: no-repeat;
  background-position: bottom center;
  display:flex;
  align-items: center;
  max-height: 100px;
}
.div6 { grid-area: 1 / 1 / 3 / 5;
  position: relative;
}

.driver-number {
  position: absolute;
    z-index: 1;
    top: -50px;
    left: 0px;
    font-family: 'Onest-Bold';
    font-size: 165px;
    color: rgba(255, 255, 255, 0.5);
}

.profile {
    position: relative;
    text-align: right;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    top: -5vh;
}

.avatar{
    width:25px !important; 
    height:25px !important;
    margin-left: 20% !important;
}

.profile-button{
    background-color: #494949 !important;
    border-radius: 20px !important;
    font-size: medium !important;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  column-gap: 17px;
  font-size:20px;
}

.day {
  padding: 5px;
  border-radius: 6px;
  text-align: center;
  background-color: rgba(47, 48, 48, 0.75)
}
.grid-geral{
  display: grid;
  grid-template-rows: repeat(3, 85px);
  text-align: center;
  padding-left: 10px
}
.grid-geral img{
  width: 370px;
  height: 85px;
}

.main{
  background:
  linear-gradient(rgba(47, 48, 48, 0.64),rgba(47, 48, 48, 0.64)),
  url('../img/backgrounds/bck.png');
}

.div6 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.div6 img {
  width: 200px;
  height: 200px;
  z-index: 2;
}

.div6 .givenName {
  font-family: 'Onest-Thin';
  text-align: right;
  font-size: xx-large;
}

.div6 .familyName {
  font-family: 'Onest-Bold';
  text-align: right;
  font-size: xxx-large;
  margin-top: -25px;
}
.names{
  margin-top:-80px;
  margin-right: 20px;
}

</style>