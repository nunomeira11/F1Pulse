import { defineStore } from "pinia";
import jsonp from "jsonp";

const PILOT_API_BASE_URL = 'http://ergast.com/api/f1';

export const usePilotStore = defineStore("pilot", {
  state: () => ({
    pilots: null,
    informations: [],
  }),
  

  getters:{
    getPilots: (state) => state.pilots,
    getDriverMapping: state => state.driverMapping,
    getTeamColors: state => state.teamColors,
  },
  actions: {
    fetchPilots(){
      return new Promise((resolve, reject) => {
        const url = `${PILOT_API_BASE_URL}/2023/drivers.json?limit=1000`;
        jsonp(url, { param: 'callback' }, (error, data) =>{
          if(error){
            console.error("Error in store fetching standings:", error);
            reject(error);
          }
          else{
            this.pilots = data.MRData.DriverTable.Drivers;
            console.log(this.pilots);
          }
        });
      });
    },
  },

});
