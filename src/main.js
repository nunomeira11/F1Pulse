import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';






import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)




const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);


app.use(Toast);


app.use(pinia);
app.use(router)
app.use(vuetify)
app.mount('#app')