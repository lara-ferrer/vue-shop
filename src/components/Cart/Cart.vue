<template>
  <div class="cart">
    <div class="cart__overlay" @click="$emit('hide-cart')" />
    <div class="cart__drawer">
      <h2>Carrito</h2>
      <b-icon-x-circle-fill @click="$emit('hide-cart')" class="cart__close" />
      <div v-if="cart.length">
        <div v-for="product in cart" :key="product.id">
          <CartList
            :id="product.id"
            :productId="product.productId"
            :quantity="product.quantity"
          />
        </div>
      </div>
      <div v-else class="cart__list">
        <p>No hay productos en el carrito</p>
      </div>
      <div v-if="cart.length" class="mt-4">
        <div class="cart__total mb-3">
          <p>Total:</p>
          <CartTotal />
        </div>
        <router-link
          :to="{ name: 'Checkout' }"
          @click.native="$emit('hide-cart')"
          class="button"
          >Pagar ahora
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconXCircleFill } from "bootstrap-vue";
import { mapGetters } from "vuex";
import CartList from "./CartList.vue";
import CartTotal from "./CartTotal.vue";

export default {
  name: "Cart",
  components: {
    BIconXCircleFill,
    CartList,
    CartTotal,
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
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.cart__drawer {
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  box-shadow: 1px 5px 8px 6px #ababab;
  padding: 2em;
  color: #000;
  z-index: 9999;
  text-align: left;
}

.cart__close {
  cursor: pointer;
  position: absolute;
  top: 2em;
  right: 2em;
}

.cart__total {
  display: flex;
}

.cart__total p {
  margin: 0;
  align-self: center;
  margin-right: 0.5em;
}

.cart__total-amount {
  font-size: 1.5rem;
  font-weight: 700;
  color: #864ebe;
}
</style>