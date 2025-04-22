<template>
    <v-alert
      v-model="show"
      :color="alertType"
      :icon="alertIcon"
      dismissible
      closable
      class="position-fixed alert-top-right"
    >
      {{ alertMessage }}
    </v-alert>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
        alertMessage: '',
        alertType: '',
        alertIcon: '',
        iconMap: '',
      };
    },
    methods: {
      showAlert(message, type) {
        this.alertMessage = message;
        this.alertType = type;
        this.alertIcon = '$'+type;
        this.show = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .alert-top-right {
    top: 0;
    right: 0;
    width: auto;
    max-width: 300px;
    z-index: 2000;
    font-size: small;
  }
  </style>