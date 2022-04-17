<template>
    <div class="cart">
        <p>Carrito</p>
        <ul>
            <li v-for="product in cart" :key="product.id">
                {{ product.productId }} ({{ product.quantity }})
            </li>
        </ul>
        <router-link to="/checkout" class="button">Checkout</router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Cart',
  methods: {
    ...mapActions(['fetchCart']),
  },
  computed: mapGetters(['cart']),
  created() {
    this.fetchCart()
  }
}
</script>

<style scoped>
    .cart {
        background-color: #fff;
        border: 1px solid #000;
        position: absolute;
        top: 5rem;
        right: 1rem;
        width: 200px;
        padding: 2em;
        color: #000;
    }
</style>