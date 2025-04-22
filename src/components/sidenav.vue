<template>
  <div>
    <div class="sidenav">
      <router-link :to="{ name: 'dashboard' }">
        <div class="icon-container" :class="{ 'selected': $route.name === 'dashboard' }">
          <img :src="$route.name === 'dashboard' ? '../src/img/icons/Home Red.png' : '../src/img/icons/Home Icon.png'" alt="Home" class="icon-image">
          <span class="link-text">Home</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'live' }">
        <div class="icon-container" :class="{ 'selected': $route.name === 'live' }">
          <img :src="$route.name === 'live' ? '../src/img/icons/Live Red.png' : '../src/img/icons/Live Icon.png'" alt="Live" class="icon-image">
          <span class="link-text">Live</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'standings' }">
        <div class="icon-container" :class="{ 'selected': $route.name === 'standings' }">
          <img :src="$route.name === 'standings' ? '../src/img/icons/Standings Red.png' : '../src/img/icons/Standings Icon.png'" alt="Standings" class="icon-image">
          <span class="link-text">Classificaçao</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'pilotstats' }">
        <div class="icon-container" :class="{ 'selected': $route.name === 'pilotstats' || $route.name === 'constructorstats' || $route.name === 'racestats'  }">
          <img :src="$route.name === 'pilotstats' || $route.name === 'constructorstats' || $route.name === 'racestats' ? '../src/img/icons/Stats Red.png' : '../src/img/icons/Stats Icon.png'" alt="Stats" class="icon-image">
          <span class="link-text">Estatisticas</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'guide-flags' }">
        <div class="icon-container" :class="{ 'selected': $route.name === 'guide-flags' || $route.name === 'guide-tires'  }">
          <img :src="$route.name === 'guide-flags' || $route.name === 'guide-tires' ? '../src/img/icons/Guide Red.png' : '../src/img/icons/Guide Icon.png'" alt="Stats" class="icon-image">
          <span class="link-text">Guia</span>
        </div>
      </router-link>
      <router-link to="" @click="logout">
        <div class="icon-container">
          <img src="../img/icons/Logout Icon.png" alt="Home" class="icon-image">
          <span class="link-text">Logout</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { useUserStore } from "@/stores/user";

export default {
  data() {
    return {
      hover: false
    };
  },

  mounted() {},

  methods: {
    logout() {
      useUserStore().logout();  // Correção aqui
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-image {
  width: 50%;  
}
.sidenav {
  display: flex;
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  justify-content: space-evenly;
  flex-direction: column;
}

.selected {
  border-color: red;
  border-color: red !important;
}
.icon-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 50%;
  padding: 3px;
  margin-bottom: 20px; /* Adiciona espaço abaixo de cada ícone */
  width: auto;
  min-width: 50px;
  height: 50px;
  position: relative;
}

.sidenav a {
  display: flex;
    align-items: center;
    margin-left: 10px;
    justify-content: flex-start;
    position: relative;
}

.sidenav .link-text {
  position: absolute;
  left: 95%;
  top: 50%;  // move o texto para o meio verticalmente
  transform: translateY(-50%);  // compensa metade da altura do texto
  margin-left: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  
}

.sidenav a:hover .link-text {
  opacity: 1;
}

</style>
