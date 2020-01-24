<template>
  <div class="home">
    <FirstComponent></FirstComponent>
  </div>
</template>

<script>
// @ is an alias to /src

import FirstComponent from "../components/FirstComponent";

export default {
  name: "home",
  components: {
    FirstComponent
  }
};
</script>
