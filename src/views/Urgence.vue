<template>
  <div>
    <body>
      <h1>Urgence</h1>
    <article class="img2">
      <img src="../assets/ambulance-3834247_640.jpg" alt="Image" />
     <br>
<a class="btn" href="tel:+448444870487">0844-487-0-487</a>
<br>
<a class="btn" href="tel:+448444870487">Click-to-Call</a>
    </article>

      
      <Footer></Footer>
    </body>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Urgence",
  components: {
    Footer
  }
};
</script>

<style>
.btn {
  background: hsl(350, 84%, 52%);
  font-family: Arial;
  color: #ffffff;
  font-size: 25px;
  padding: 10px 20px 20px 20px;
  text-decoration: none;
  line-height: 300%;
}

.btn:hover {
  background: hsl(355, 98%, 61%);
  text-decoration: none;
}

a[href^="tel:"]:before {
  content: "\260e";
  margin-right: 0.5em;
}
</style>
