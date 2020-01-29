<template>
  <div>
    <h1>Horaires d'ouvertures :</h1>

    <section>
      <table class="table-horaires">
        <tr>
          <td>LUNDI</td>

          <td>08h30</td>
          <td>12h00</td>
          <td>13h30</td>
          <td>17h00</td>
        </tr>

        <tr>
          <td>MARDI</td>
          <td>08h30</td>
          <td>12h00</td>
          <td>13h30</td>
          <td>17h00</td>
        </tr>

        <tr>
          <td>
            MERCREDI
          </td>
          <td>08h30</td>
          <td>12h00</td>
          <td>13h30</td>
          <td>17h00</td>
        </tr>

        <tr>
          <td>
            JEUDI
          </td>
          <td>08h30</td>
          <td>12h00</td>
          <td>13h30</td>
          <td>17h00</td>
        </tr>

        <tr>
          <td>
            VENDREDI
          </td>
          <td>08h30</td>
          <td>12h00</td>
          <td>13h30</td>
          <td>17h00</td>
        </tr>

        <tr>
          <td>
            SAMEDI
          </td>
          <td>08h30</td>
          <td>12h00</td>
          <td>Fermer</td>
          <td>fermer</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="css" scoped>
section {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

.table-horaires {
  height: 25rem;

  color: blue;

  padding: 120px;

  width: 100%;
}

td {
  border: 2px solid black;
  border-collapse: collapse;
}
</style>
