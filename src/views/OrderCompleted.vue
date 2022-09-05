<template class="order-completed">
  <b-container>
    <b-row>
      <b-col sm="12" md="12">
        <h1 class="order-completed__title">¡Pedido realizado!</h1>
        <p>
          Tu pedido está en proceso de preparación. Recibirás un e-mail de
          confirmación cuando sea enviado.
        </p>
        <p><strong>¡Muchas gracias por comprar en Caseland!</strong></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { BContainer } from "bootstrap-vue";
import { BRow } from "bootstrap-vue";
import { BCol } from "bootstrap-vue";

export default {
  name: "OrderCompleted",
  components: {
    BContainer,
    BRow,
    BCol,
  },
  mounted() {
    document.title = "Pedido hecho | Caseland";
  },
  computed: {
    ...mapGetters(["orders"]),
  },
};
</script>

<style scoped>
.order-completed {
  text-align: center;
  height: 1000px;
}
</style>