<template>
    <div class="cart__item">
      <div class="cart__product-info">
        <b-icon-trash class="cart__remove-icon" @click="updateCart({ id: id })" />
        <img :src="`${getProductInfo.image}`" :alt="`${getProductInfo.name}`" class="cart__item__image">
        <p class="cart__item__title">{{ getProductInfo.name }}</p>
      </div>
      <div class="cart__attributes">
        <div class="cart__quantity">
          <span :class="quantity === 1 ? 'cart__counter--disabled' : ''" class="cart__counter" @click="updateCart({ id: id, productId: productId, quantity: quantity -= 1 })">
            <b-icon-dash-circle />
          </span>
          {{ quantity }}
          <span class="cart__counter" @click="updateCart({ id: id, productId: productId, quantity: quantity += 1 })">
            <b-icon-plus-circle />
          </span>
        </div>
        <div class="cart__product-price">
          <p class="m-0">{{ getProductInfo.price }} €</p>
        </div>
      </div>
    </div>
</template>

<script>
import { BIconTrash, BIconPlusCircle, BIconDashCircle } from "bootstrap-vue";
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'CartList',
  props: {
    id: Number,
    productId: Number,
    quantity: Number
  },
  components: {
    BIconTrash,
    BIconPlusCircle,
    BIconDashCircle,
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
    justify-content: space-between;
    margin: 1rem 0;
  }

  .cart__item__title {
    margin: 0 0 0 1em;
    align-self: center;
    font-weight: 700;
  }

  .cart__item__image {
    width: 15%;
  }

  .cart__attributes {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    align-self: center;
    width: 30%;
  }

  .cart__product-info {
    align-self: center;
    width: 70%;
  }

  .cart__product-price {
    display: inline;
  }
  
  .cart__counter, .cart__remove-icon {
    cursor: pointer;
  }

  .cart__counter--disabled {
    pointer-events: none;
    color: #d4d4d4;
  }

  .cart__remove-icon {
    align-self: center;
    margin-right: 1rem;
  }

  .cart__quantity {
    display: flex;
    gap: 0.5em;
    justify-content: space-between;
  }
</style>