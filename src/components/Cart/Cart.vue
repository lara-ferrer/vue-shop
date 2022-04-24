<template>
    <div class="cart">
        <h2>Carrito</h2>
        <div v-if="cart.length">
          <div v-for="product in cart" :key="product.id" class="cart__list">
            <CartItem
              :productId="product.productId"
              :quantity="product.quantity"
            />
          </div>
        </div>
        <div v-else class="cart__list">
          <p>No hay productos en el carrito</p>
        </div>
        <router-link :to="{ name: 'Checkout' }" class="button">Checkout</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from "./CartItem.vue";

export default {
  name: 'Cart',
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['cart']),
  },
}
</script>

<style scoped>
  .cart {
    background-color: #fff;
    border: 1px solid #000;
    position: absolute;
    top: 5rem;
    right: 1rem;
    width: 30%;
    padding: 2em;
    color: #000;
  }

  .cart__list {
    margin: 1rem 0;
  }
</style>