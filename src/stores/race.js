import { defineStore } from "pinia";
import jsonp from "jsonp";

const RACE_API_BASE_URL = 'http://ergast.com/api/f1';

export const useRaceStore = defineStore("race", {
  state: () => ({
    races: null,
  }),
  

  getters:{
    getRaces: (state) => state.races,
  },
  actions: {
    fetchRaces(){
      return new Promise((resolve, reject) => {
        const url = `${RACE_API_BASE_URL}/2023/circuits.json?limit=1000`;
        jsonp(url, { param: 'callback' }, (error, data) =>{
          if(error){
            console.error("Error in store fetching standings:", error);
            reject(error);
          }
          else{
            this.races = data.MRData.CircuitTable.Circuits;
            console.log(this.races);
          }
        });
      });
    },
  },

});
