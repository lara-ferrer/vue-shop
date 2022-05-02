<template>
  <div class="cart" v-if="isCartOpen">
    <div class="cart__overlay" @click="hideCart()" />
    <div class="cart__drawer">
      <h2>Carrito</h2>
      <b-icon-x-circle-fill @click="hideCart()" />
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
.cart__overlay {
  background-color: #c05cde66;
  width: 100vw;
  height: 100vh;
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
  height: 100vh;
  box-shadow: 1px 5px 8px 6px #ababab;
  padding: 2em;
  color: #000;
  z-index: 9999;
}

.cart__list {
  margin: 1rem 0;
}
</style>