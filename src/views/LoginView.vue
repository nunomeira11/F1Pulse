<template>
  <div style="display: flex; justify-content: flex-end;">
    <div style="flex: 1;">
      <img src="../img/backgrounds/imageBK.jpg" alt="Imagem" style="width: 100%; height: 100vh; object-fit: cover;">
    </div>
    <v-form @submit.prevent = "login">
    <div style="flex: 1; max-width: 450px;">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" style="height: 100vh;">
        <div class="text-h4 text-white mb-4">Acede à tua Conta</div>

        <v-text-field
          v-model="username"
          density="compact"
          placeholder="Username"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Password"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-btn
          block
          class="mb-8"
          color="white"
          size="large"
          variant="tonal"
          type="submit"
        >
          Aceder
        </v-btn>

        <v-card-text class="text-center">
          <router-link
            to="/register"
            class="text-white"
          >
           Não tens conta?
          </router-link>
        </v-card-text>
      </v-card>
    </div>
  </v-form>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user";
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      store: useUserStore(),
      username: "",
      password: "",
      visible: false // Adicionando o estado para controlar a visibilidade da senha
      
    };
    
  },
  setup() {
      // Get toast interface
      const toast = useToast();
      // Make it available inside methods
      return { toast }
    },

  methods: {
    async login() {
  try {
    await this.store.login(this.username, this.password)
    this.$router.push({ name: "home" });
  } catch (error) {
    this.toast.error("Login Falhou!");
  }
},
  },
};
</script>

<style scoped>
*{
  max-height: 99vh;
}

html,body {
  overflow: hidden !important;
}
.v-card {
  background-color: #242833 !important;
}

.v-btn {
  background-color: #F83D49 !important;
}

a:hover {
  text-decoration: underline !important;
}

::v-deep .v-input--density-compact .v-field--variant-outlined {
    --v-field-padding-bottom: 8px;
    color: white !important;
}
</style>
