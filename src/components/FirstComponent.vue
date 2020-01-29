<template>
  <div>
    <h1>CABINET MÉDICAL DE RHUMATOLOGIE</h1>

    <article class="img1">
      <img src="../assets/accueil.jpg" alt="Image" />
    </article>
  </div>
</template>

<script>
export default {
  name: "FirstComponent"
};
</script>

<style>
h1 {
  background-color: blue;
}
div {
  grid-column: span 6;
  text-align: center;
}

img {
  width: 45%;
}
</style>
