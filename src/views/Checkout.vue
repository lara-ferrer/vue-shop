<template class="checkout">
  <b-container>
    <b-row>
      <b-col sm="12" md="8">
        <h1 class="checkout__title">Checkout</h1>
        <div v-if="cart.length">
          <div v-for="product in cart" :key="product.id">
            <CartItem
              :id="product.id"
              :productId="product.productId"
              :quantity="product.quantity"
            />
          </div>
        </div>
        <div v-else>
          <p class="checkout__no-products">No hay productos en el carrito</p>
        </div>
      </b-col>
      <b-col sm="12" md="4" class="checkout__total">
        <h2>Total</h2>
        <CartTotal />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from "../components/Cart/CartItem.vue";
import CartTotal from "../components/Cart/CartTotal.vue";

export default {
  name: 'Checkout',
  components: {
    CartItem,
    CartTotal
  },
  computed: {
    ...mapGetters(['cart']),
  },
  mounted() {
    document.title = 'Checkout | Caseland'
  },
}
</script>

<style scoped>
  .checkout__title {
    text-align: left;
    margin-bottom: 2rem;
  }

  .checkout__no-products {
    text-align: left;
  }

  .checkout__total {
    text-align: left;
    border-left: 1px solid rgb(166, 166, 166);
  }
</style>