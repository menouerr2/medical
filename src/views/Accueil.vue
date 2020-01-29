<template>
  <div class="Accueil">
    <FirstComponent></FirstComponent>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src

import FirstComponent from "../components/FirstComponent.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Accueil",
  components: {
    FirstComponent,
    Footer
  }
};
</script>

<style></style>
