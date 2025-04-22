<template>
  <div style="display: flex; justify-content: flex-end;">

    <div style="flex: 1; max-width: 450px;">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" style="height: 100vh;">
        <div class="text-h4 text-white mb-4">Criar uma Conta</div>
        <v-form @submit.prevent = "register">
        <!-- Campos de texto para o registro -->
        <v-text-field
          v-model="first"
          density="compact"
          placeholder="Primeiro Nome"
          variant="outlined"
          required
        ></v-text-field>

        <v-text-field
          v-model="last"
          density="compact"
          placeholder="Último Nome"
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="username"
          density="compact"
          placeholder="Nome de Utilizador"
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

        <!-- Botão de registro -->
        <v-btn
          block
          class="mb-8"
          color="white"
          size="large"
          variant="tonal"
          type="submit"
        >
          Registar
        </v-btn>
      </v-form>
        <!-- Link para página de login -->
        <v-card-text class="text-center">
          <router-link
            to="/login"
            class="text-white text-decoration-none"
          >
            Já tens uma conta?
          </router-link>
        </v-card-text>
      </v-card>
    </div>

    <div style="flex: 1;">
      <img src="../img/backgrounds/imageBK.jpg" alt="Nova Imagem" style="width: 100%; height: 100vh; object-fit: cover;">
    </div>
  </div>
  <AlertComponent
    ref="alert"
    message=""
    type=""
  />
</template>

<script>
import { useUserStore } from "@/stores/user";
import AlertComponent from '../components/AlertComponent.vue';
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      store: useUserStore(),
      first: "",
      last: "",
      username: "",
      password: "",
      visible: false
    };
  },
  setup() {
      // Get toast interface
      const toast = useToast();
      // Make it available inside methods
      return { toast }
    },
  components: {
    AlertComponent,
  },
  methods: {
    async register() {
  if (!this.first || !this.last || !this.username || !this.password) {
    //this.$refs.alert.showAlert('Todos os campos são obrigatórios!', 'error');
    this.toast.error("Todos os Campos são Obrigatorios!");
    return;
  }

  try {
    await this.store.register(this.first, this.last, this.username, this.password);
    await this.store.login(this.username, this.password);
    this.$router.push({ name: "home" }); // Redireciona para a página do dashboard após o login
  } catch (error) {
    //this.$refs.alert.showAlert(error.message, 'error');
    this.toast.error(error.message);
  }
},
  },
};
</script>

<style scoped>
*{
  max-height: 99vh;
}
::v-deep .v-input--density-compact .v-field--variant-outlined {
    --v-field-padding-bottom: 8px;
    color: white !important;
}

html,body {
  overflow: hidden;
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
</style>