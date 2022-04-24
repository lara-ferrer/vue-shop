<template>
    <div class="cart__item">
      <img :src="`${getProductInfo.image}`" :alt="`${getProductInfo.name}`" class="cart__item__image">
      {{ getProductInfo.name }} x {{ this.quantity }}
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
  .cart__item__image {
    width: 10%;
  }
</style>