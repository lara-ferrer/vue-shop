<template class="checkout">
  <b-container>
    <b-row>
      <b-col sm="12" md="8">
        <h1>Checkout</h1>
        <div v-for="product in cart" :key="product.id">
          <CartItem
            :productId="product.productId"
            :quantity="product.quantity"
          />
        </div>
      </b-col>
      <b-col sm="12" md="4">
        <p>TOTAL</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from "../components/Cart/CartItem.vue";

export default {
  name: 'Checkout',
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['cart']),
  },
  head: {
    title: {
      inner: 'Checkout',
      separator: '|',
      complement: 'Caseland'
    },
    meta: [
      { name: 'description', content: 'Si has elegido ya tus productos, puedes hacer el pago ahora.' }
    ]
  },
}
</script>

<style scoped>
  
</style>