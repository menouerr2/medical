<template>
  <div class="Médecin">
    <h1>Médecins</h1>
    <article class="img2">
      <img src="../assets/anesthesia-4677401_640.jpg" alt="Docteur1" />
      <img src="../assets/doctor-1149149_640.jpg" alt="Docteur2"/>
    </article>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Médecin",
  components: {
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
