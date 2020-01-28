<template>
  <div class="Accueil">
    
    <FirstComponent></FirstComponent>


    <footer class="pied">  <h4>ADRESSE:</h4> <p> 164  RUE DU MOLINEL <br> 75000 PARIS <br> 01-50-50-50-50</p></footer>
    
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

footer{
    background-color:red;
   
    
    
  }



</style>
