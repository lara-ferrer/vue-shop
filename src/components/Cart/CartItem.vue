<template>
    <div class="cart__item">
      <div class="cart__product-info">
        <img :src="`${getProductInfo.image}`" :alt="`${getProductInfo.name}`" class="cart__item__image">
        <p>{{ getProductInfo.name }}</p>
      </div>
      <div class="cart__product-price">
        <p>{{ getProductInfo.price }} €</p>
      </div>
      <div class="cart__quantity">
        {{ this.quantity }}
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartItem',
  props: {
    productId: Number,
    quantity: Number
  },
  computed: {
    ...mapGetters(['products']),
    getProductInfo() {
      return this.products.filter(product => product.id === this.productId)[0]
    }
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