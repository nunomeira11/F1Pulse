import { defineStore } from "pinia";
import jsonp from "jsonp";

const STANDING_API_BASE_URL = 'http://ergast.com/api/f1';

export const useStandingStore = defineStore("standing", {
  state: () => ({
    years: null,
    standings: [],
    races: [],  
  }),
  

  getters:{
    getYears: (state) => state.years,
    getStandings: (state) => state.standings
  },
  actions: {
    fetchYears(){
      return new Promise((resolve, reject) => {
        const url = `${STANDING_API_BASE_URL}/seasons.json?limit=1000`;
        jsonp(url, { param: 'callback' }, (error, data) =>{
          if(error){
            console.error("Error in store fetching standings:", error);
            reject(error);
          }
          else{
            this.years = data.MRData.SeasonTable.Seasons;
          }
        });
      });
    },
    

    fetchStandings(year,race){
      const url = `${STANDING_API_BASE_URL}/${year}/${race}/results.json`;
      jsonp(url, { param: 'callback' }, (error, data) =>{
        
        if(error){
          console.error("Error in store fetching standings:", error);
          throw error;
        }
        else{
          this.standings = data.MRData.RaceTable.Races[0].Results;
        }
      });
    },

    fetchRaces(year) {
      const url = `${STANDING_API_BASE_URL}/${year}.json`;
      jsonp(url, { param: 'callback' }, (error, data) => {
        if (error) {
          console.error("Error in store fetching races:", error);
          throw error;
        } else {
          this.races = data.MRData.RaceTable.Races;
        }
      });
    }
    
  },
});
