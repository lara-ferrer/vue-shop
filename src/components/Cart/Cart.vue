<template>
  <div class="cart" v-if="isCartOpen">
    <div class="cart__overlay" @click="hideCart()" />
    <div class="cart__drawer">
      <span class="cart__close">
        <b-icon-x-circle-fill @click="hideCart()" />
      </span>
      <h2 class="cart__title">Carrito</h2>
      <div v-if="cart.length">
        <div v-for="product in cart" :key="product.id" class="cart__list">
          <CartItem
            :id="product.id"
            :productId="product.productId"
            :quantity="product.quantity"
          />
        </div>
        <CartTotal />
      </div>
      <div v-else class="cart__list">
        <p>No hay productos en el carrito</p>
      </div>
      <router-link :to="{ name: 'Checkout' }" class="button"
        >Checkout</router-link
      >
    </div>
  </div>
</template>

<script>
import { BIconXCircleFill } from "bootstrap-vue";
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";
import CartTotal from "./CartTotal.vue";

export default {
  name: "Cart",
  components: {
    BIconXCircleFill,
    CartItem,
    CartTotal,
  },
  props: {
    isCartOpen: Boolean
  },
  methods: {
    hideCart() {
      this.isCartOpen = !this.isCartOpen
    },
  },
  computed: {
    ...mapGetters(["cart", "products"]),
  },
};
</script>

<style scoped>
.cart {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.cart__overlay {
  background-color: #c05cde66;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.cart__drawer {
  background-color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  width: 35vw;
  height: 100%;
  box-shadow: 1px 5px 8px 6px #ababab;
  padding: 2em;
  color: #000;
  z-index: 9999;
}

.cart__close {
  position: absolute;
  right: 2em;
  top: 1em;
  font-size: 1.5em;
}

.cart__title {
  margin-top: 2em;
}

.cart__list {
  margin: 2em 0;
}
</style>