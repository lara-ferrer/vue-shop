<template>
    <div class="cart__total">
      <p>Total:</p>
      {{ totalPrice }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartTotal',
  props: {
    totalPrice: Number
  },
  computed: {
    ...mapGetters(['products']),
    getProductInfo() {
      return this.products.filter(product => product.id === this.productId)[0]
    },
  },
}
</script>

<style scoped>
  .cart__item, .cart__product-info {
    display: flex; 
  }

  .cart__item {
    align-content: space-between;
    gap: 1rem;
  }

  .cart__product-price {
    display: inline;
  }
  
  .cart__item__image {
    width: 10%;
  }
</style>