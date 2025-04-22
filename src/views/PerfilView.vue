<template>
    <Sidenav></Sidenav>
  
    <div class="main">
      <div class="imgBack">
        <img src="../img/backgrounds/backgroundPerfil.jpg">
      </div>
      
      <div class="perfil">
        <div class="grid-container">
            <div class="avatar" @click="dialog = true">
                <v-avatar size="70" :image="`../src/img/avatars/${store.user.avatarNumber}.png`"></v-avatar>
                <div class="hover-icon"><img src="../img/icons/edit.png"></div>
            </div>
          <div class="username">
            <b>{{ user.username }}</b>    
          </div>
          <form class="form" @submit.prevent="submitForm">
            <div class="input-old-password">
              <v-text-field
              v-model="old_password"
                density="compact"
                placeholder="Password Antiga"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                required>
        </v-text-field>
            </div>
            <div class="input-new-password">
              <v-text-field
              v-model="new_password"
                density="compact"
                placeholder="Password Nova"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                required></v-text-field>
            </div>
            <v-btn
            block
            class="mb-8"
            color="white"
            size="large"
            variant="tonal"
            type="submit"
            >
            Alterar
        </v-btn>
          </form>    
        </div>
        <div class="fav-driver" :style="getTeamColor(favDriver.driverId)">        
          <div class="front"> 
            <div class="name-nacionality">
              <span class="first-name">{{ favDriver.givenName }}</span>
              <img :src="`../src/img/drivers/flags/${favDriver.nationality}.png`"  alt="" class="nacionality">
            </div>
            <div class="last-name">{{ favDriver.familyName }}</div>
            <img :src="`../src/img/drivers/all/${favDriver.driverId}.png`" alt="" class="driver-photo">
          </div>
          <div class="back">
            <p>Escolhe o teu piloto favorito para acompanhares todos os resultados dele !</p>
            <div class="box" :style="{ borderColor: getTeamColor1(favDriver.driverId), boxShadow: `0px 0px 25px 9px ${getTeamColor1(favDriver.driverId)}`, borderRadius: '13px' }">
            <button @click="dialogFav = true" class="btn-selecionar">Selecionar</button>
          </div>
          </div>
        </div>
      </div>

      <v-dialog v-model="dialog" max-width="290">
            <v-card>
                <v-card-title class="headline">Escolha o seu avatar</v-card-title>
                <v-card-text>
                <div class="avatars">
                    <img
                    v-for="avatarNumber in 12"
                    :key="avatarNumber"
                    :src="`../src/img/avatars/${avatarNumber}.png`"
                    @click="selectAvatar(avatarNumber)"
                    />
                </div>
                </v-card-text>
            </v-card>
        </v-dialog>
        
        <v-dialog v-model="dialogFav" max-width="290">
          <v-card>
              <v-card-title class="headline">Escolha o seu piloto</v-card-title>
              <v-card-text>
                <!-- Aqui você pode listar os pilotos para o usuário escolher -->
                <select v-model="selectedPilot" style="border: 1px solid black;">
                  <option v-for="(pilot, index) in pilotStore.$state.pilots" :key="index" :value="pilot">
                    {{ pilot.givenName }} {{ pilot.familyName }}
                  </option>
                </select>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="updateFavDriver">Confirmar</v-btn>
                <v-btn color="green darken-1" text @click="dialogFav = false">Fechar</v-btn>
              </v-card-actions>
            </v-card>
        </v-dialog>

        <AlertComponent
            ref="alert"
            message=""
            type=""
        />

    </div>
  </template>
  
  <script>
  import { useUserStore } from "@/stores/user";
  import { usePilotStore } from "@/stores/pilot";
  import Sidenav from "../components/sidenav.vue";
  import { useToast } from "vue-toastification";
  
  export default {
    data() {
      return {
        store: useUserStore(),
        dialog: false,
        dialogFav: false,
        colorPair: null,
        images: [
        '../src/img/avatars/1.png',
        '../src/img/avatars/2.png',
        '../src/img/avatars/3.png',
        '../src/img/avatars/4.png',
        '../src/img/avatars/5.png',
        '../src/img/avatars/6.png',
        '../src/img/avatars/7.png',
        '../src/img/avatars/8.png',
        '../src/img/avatars/9.png',
        '../src/img/avatars/10.png',
        '../src/img/avatars/11.png',
        '../src/img/avatars/12.png',
      ],
      selectedImage: '',
      old_password: '',
      new_password: '',
      pilotStore: usePilotStore(),
      selectedPilot: null,
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
      "mercedes": ["rgba(6, 157, 152, 0.8)", "rgba(14, 29, 33, 1)"],
      "red bull": ["rgba(28, 38, 57, 1)", "rgba(116, 32, 47, 1)"],
      "ferrari": ["rgba(166,4,4,1)","rgba(0,0,0,0.947391456582633)"],
      "mclaren": ["rgba(254,136,4,1)", "rgba(0,0,0,0.947391456582633)"],
      "aston martin": ["rgba(0,88,80,1)", "rgba(5,27,6,1)"],
      "alfa romeo": ["rgba(127,0,0,1)", "rgba(0,0,0,1)"],
      "williams": ["rgba(5,160,227,1)", "rgba(0,0,0,1)"],
      "haas f1 team": ["rgba(223, 44, 44, 0.87)", "rgba(0,0,0,1)"],
      "alphatauri": ["rgba(14, 22, 35, 0.87)", "rgba(0,0,0,1)"],
      "alpine f1 team":["rgba(15, 28, 44, 1)", "rgba(0,0,0,1)"],
    },
      };
    },
    setup() {
      // Get toast interface
      const toast = useToast();
      // Make it available inside methods
      return { toast }
    },
  
    computed: {
      user() {
        return this.store.getUser;
      },
      pilots() {
    return usePilotStore().getPilots;
      },
      favDriver() {

        if (!this.pilots || !this.user) {
          return null;
        }

        const foundPilot = this.pilots.find(pilot => {
          return pilot.givenName === this.user.favDriver;
        });

        console.log('Found pilot:', foundPilot);
        return foundPilot;
      },
    },

    created() {
     this.pilotStore.fetchPilots();
    },
  
    components: {
      Sidenav,
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
            this.dialog = false;
        },
        selectAvatar(avatarNumber) {
            this.store.updateAvatar(this.store.user.id, avatarNumber);
            this.dialog = false;
        },
        updateFavDriver() {
          console.log('entrei');
          this.store.updateFavDriver(this.store.user.id,this.selectedPilot.givenName);
          this.dialogFav = false;
        },
        submitForm() {
              if (this.old_password !== this.store.user.password) {
                  this.toast.error("Senha Atual Errada!");  
                  return;
              }

              this.store.updatePassword(this.store.user.id, this.new_password);
              this.toast.success("Password Atualizada com Sucesso!");  
              this.old_password = "";
              this.new_password = "";
              },
        getTeamColor(driverName) {
          for (let team in this.driverMapping) {
            if (this.driverMapping[team].includes(driverName)) {
              console.log(this.teamColors[team]);
              let colorPair = this.teamColors[team];
              return {
                background: `linear-gradient(${colorPair[0]}, ${colorPair[1]})`
              };
            }
          }
          return null;
        },
        getTeamColor1(driverName) {
          for (let team in this.driverMapping) {
            if (this.driverMapping[team].includes(driverName)) {
              return this.teamColors[team][0]; // retorna a primeira cor da equipe
            }
          }
          return '#0b757e'; // cor padrão
        },
      },
        
  }
  </script>
  
  <style lang="scss" scoped>
* {
  overflow: hidden;
  font-family: 'Onest';  
}
  .imgBack img {
    width: 100% !important;
    height: 300px !important;
  }
  
  .grid-container {
    width: 35%;
    display: grid;
    grid-template-areas: 
      "avatar username"
      "form form";
    grid-gap: 25px;
    align-items: center;
  }
  
  .avatar {
    grid-area: avatar;
  }



  .avatar {
  position: relative;
  display: inline-block;
  width: 70px; /* corresponde ao tamanho do v-avatar */
  height: 70px; /* corresponde ao tamanho do v-avatar */
}

.v-avatar {
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.avatar:hover .v-avatar {
  opacity: 0.25;
}
.hover-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  cursor: pointer;
}

.hover-icon img {
  width: 20px;
  height: 20px;
}

.avatar:hover .hover-icon {
  opacity: 1;
}
  
  .username {
    grid-area: username;
  }
  
  .form {
    grid-area: form;
    display: grid;
    grid-template-areas: 
      "input-old-password"
      "input-new-password";
    grid-gap: 10px;
  }
  
  .input-old-password {
    grid-area: input-old-password;
  }
  
  .input-new-password {
    grid-area: input-new-password;
  }

  .perfil{
    display: flex;
    justify-content: space-between;
  }
  
  .fav-driver {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;  // alterado para 300px
  height: 345px;  // alterado para 345px
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  font-size: smaller;
  perspective: 1000px;
}

.fav-driver .front, .fav-driver .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: transform 0.6s;
}

.fav-driver .first-name {
  font-weight: thin;
  align-self: flex-start;
}

.fav-driver .name-nacionality {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.fav-driver .last-name {
  font-weight: bold;
}

.fav-driver .last-name {
  font-weight: bold;
  align-self: flex-start;
}

.fav-driver .driver-photo {
  margin-top: auto;
  width: 100%;
  height: auto;
}

.fav-driver .back {
  transform: rotateY(180deg);
}

.fav-driver:hover .front {
  transform: rotateY(180deg);
}

.fav-driver:hover .back {
  transform: rotateY(0);
}

.back{
  padding: 10px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
}

.first-name{
  font-family: 'Onest-Thin';
  padding-left: 10px;
}

.last-name{
  font-family: 'Onest-Bold';
  font-size: xxx-large;
  margin-top: -20px;
  padding-left: 10px;
}

.nacionality {
  width: 20%;
  border-radius: 5px;
  align-self: flex-end;
  margin-right: 10px;
}

.btn-selecionar{
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: none;
  color: white;
  font-family: 'Onest-Bold';
  font-size: 20px;
  cursor: pointer;
}
  </style>