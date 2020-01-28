<template>
  <div class="Accueil">
    
    <FirstComponent></FirstComponent>

  <template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
    
  </div>

  
</template>

<script>
// @ is an alias to /src

import FirstComponent from "../components/FirstComponent";

export default {
  name: "Accueil",
  components: {
    FirstComponent
  }
};
</script>

<style>





</style>
