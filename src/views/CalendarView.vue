<template>
        <Sidenav></Sidenav>
    <div class="main">
        <div class="parent">
            <div v-for="(race, index) in calendarStore.$state.races.slice(0, 9)" :key="index" :class="`div${index + 1}`">
                <div class="date-flag">
                    <span class="date"> {{ race.date }} </span>
                    <span class="country-flag"> <img :src="`../src/img/flags/${race.Circuit.Location.country.toLowerCase()}.png`" alt=""> </span>
                </div>
                <hr>
                <div class="city"> {{ race.Circuit.Location.locality }} </div>
                <div class="circuit-name"> {{ race.raceName }} </div>   
            </div>
        </div>
    </div>
</template>

<script>
import Sidenav from "../components/sidenav.vue";
import { useCalendarStore } from "@/stores/calendar";

    export default {
        data() {
            return {
                calendarStore: useCalendarStore(),
            };
            
        },
        components: {
            Sidenav,
        },
        methods: {
    logCountry() {
      this.calendarStore.$state.races.slice(0, 9).forEach(race => {
        console.log(race.Circuit.Location.country.toLowerCase());
      });
    }
  },
  mounted() {
    this.logCountry();
  },
        created () {
            this.calendarStore.fetchRaces();
        },
    }
</script>

<style lang="scss" scoped>
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 30px;
grid-row-gap: 30px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3;}
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 2 / 3 / 3 / 4;}
.div7 { grid-area: 3 / 1 / 4 / 2; }
.div8 { grid-area: 3 / 2 / 4 / 3; }
.div9 { grid-area: 3 / 3 / 4 / 4; }

.parent > div {
  display: flex;
  flex-direction: column;
  background:
  linear-gradient(rgba(56, 56, 56, 0.75),rgba(56, 56, 56, 0.75)), 
  url(../img/backgrounds/xadrez.png);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: #FFF;
}

hr {
    border: none; /* Remove a borda padrão */
    border-top: 5px solid #FFF; /* Define a espessura e a cor da linha */
    border-radius: 10px;
    margin: 10px 0;
}

.date-flag{
    display: flex;
    justify-content: space-between;
}

.date{
    font-size: 30px;
    font-family: 'Onest-Bold';
    color: #FFD300;
}

.country-flag img{
    //width: 50%;
    width: 100px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.city{
    font-size: 25px;
    font-family: 'Onest-Bold';
}

.circuit-name{
    font-size: 15px;
    font-family: 'Onest';
}

.country-flag{
    width: auto !important;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    align-self: flex-start;
}
</style>