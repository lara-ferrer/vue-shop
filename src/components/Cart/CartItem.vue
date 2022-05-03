<template>
    <div class="cart__item">
      <div class="cart__product-info">
        <b-icon-trash class="cart__remove-icon" @click="removeCart({ id: id })" />
        <img :src="`${getProductInfo.image}`" :alt="`${getProductInfo.name}`" class="cart__item__image">
        <p>{{ getProductInfo.name }}</p>
      </div>
      <div class="cart__product-price">
        <p>{{ getProductInfo.price }} €</p>
      </div>
      <div class="cart__quantity">
        <span class="cart__counter" @click="updateCart({ id: id, productId: productId, quantity: quantity -= 1 })">-</span> {{ quantity }} <span class="cart__counter" @click="updateCart({ id: id, productId: productId, quantity: quantity += 1 })">+</span>
      </div>
    </div>
</template>

<script>
import { BIconTrash } from "bootstrap-vue";
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'CartItem',
  props: {
    id: Number,
    productId: Number,
    quantity: Number
  },
  components: {
    BIconTrash
  },
  methods: {
    ...mapActions(['updateCart', 'removeCart'])
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
    gap: 5rem;
  }

  .cart__product-price {
    display: inline;
    width: 50%;
  }

  .cart__quantity {
    width: 40%;
  }
  
  .cart__item__image {
    width: 10%;
  }
  
  .cart__counter, .cart__remove-icon {
    cursor: pointer;
  }

  .cart__remove-icon {
    align-self: center;
    margin-right: 1rem;
  }
</style>