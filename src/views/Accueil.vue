<template>
  <div class="Accueuil">
    <FirstComponent></FirstComponent>
  </div>
</template>

<script>
// @ is an alias to /src

import FirstComponent from "../components/FirstComponent";

export default {
  name: "Accueuil",
  components: {
    FirstComponent
  }
};
</script>
