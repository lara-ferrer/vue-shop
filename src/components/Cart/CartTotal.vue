<template>
    <div class="cart__total-amount">
      {{ totalPrice }} €
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartTotal',
  computed: {
    ...mapGetters(['cart', 'products']),
    totalPrice() {
      let finalPrice = 0;

      this.cart.map(item => {
        const product = this.products.filter(product => product.id === item.productId)[0]
        finalPrice += item.quantity * product.price;
      });

      return finalPrice;
    }
  },
}
</script>

<style scoped>
  .cart__total-amount {
    font-size: 1.5rem;
    font-weight: 600;
  }
</style>