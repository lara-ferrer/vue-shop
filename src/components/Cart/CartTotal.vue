<template>
    <div class="cart__total-amount">
      {{ totalPrice }}
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