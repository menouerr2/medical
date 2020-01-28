<template>
  <div class="Accueil">
    <FirstComponent></FirstComponent>
    
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
