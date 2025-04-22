import { defineStore } from "pinia";
import jsonp from "jsonp";

const CONSTRUCTOR_API_BASE_URL = 'http://ergast.com/api/f1';

export const useConstructorStore = defineStore("constructor", {
  state: () => ({
    constructors: null,
  }),

  getters:{
    getConstructors: (state) => state.constructors,
  },
  actions: {
    fetchConstructors(){
      return new Promise((resolve, reject) => {
        const url = `${CONSTRUCTOR_API_BASE_URL}/2023/constructors.json?limit=1000`;
        jsonp(url, { param: 'callback' }, (error, data) =>{
          if(error){
            console.error("Error in store fetching standings:", error);
            reject(error);
          }
          else{
            this.$state.constructors = data.MRData.ConstructorTable.Constructors;
            console.log(this.$state.constructors);
            resolve(this.$state.constructors);
          }
        });
      });
    },
  },
});