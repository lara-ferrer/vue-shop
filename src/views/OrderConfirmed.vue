<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col sm="12" lg="4">
          <p>Tu pedido ha sido realizado con éxito.</p>
          <router-link :to="{ name: 'Home' }" class="button"
            >Volver al inicio</router-link
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { BContainer } from "bootstrap-vue";
import { BRow } from "bootstrap-vue";
import { BCol } from "bootstrap-vue";

export default {
  name: "OrderConfirmed",
  components: {
    BContainer,
    BRow,
    BCol,
  },
  mounted() {
    document.title = "Pedido completado | Caseland";
  },
};
</script>

<style scoped>
</style>