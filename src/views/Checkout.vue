<template class="checkout">
  <b-container>
    <b-row v-if="cart.length > 0">
      <b-col sm="12" md="8">
        <h1 class="checkout__title">Checkout</h1>
        <div>
          <div v-for="product in cart" :key="product.id">
            <CartList
              :id="product.id"
              :productId="product.productId"
              :quantity="product.quantity"
            />
          </div>
        </div>
      </b-col>
      <b-col sm="12" md="4" class="checkout__total">
        <h2>Total</h2>
        <CartTotal />
        <button class="button" @click="placeOrder(cart)">Hacer pedido</button>
      </b-col>
    </b-row>
    <b-row v-if="cart.length === 0">
      <b-col sm="12" md="8">
        <h1 class="checkout__title">Checkout</h1>
        <p class="checkout__no-products">No hay productos en el carrito</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartList from "../components/Cart/CartList.vue";
import CartTotal from "../components/Cart/CartTotal.vue";
import OrderCompleted from "../views/OrderCompleted.vue";
import { BContainer } from "bootstrap-vue";
import { BRow } from "bootstrap-vue";
import { BCol } from "bootstrap-vue";

export default {
  name: "Checkout",
  components: {
    CartList,
    CartTotal,
    BContainer,
    BRow,
    BCol,
  },
  methods: {
    ...mapActions(["addOrder", "removeCart"]),
    placeOrder(cart) {
      this.addOrder(cart);
      this.removeCart(cart);

      this.$router.push({
        path: "/order-completed",
        name: "Order Completed",
        component: OrderCompleted,
      });
    },
  },
  computed: {
    ...mapGetters(["cart", "orders"]),
  },
  mounted() {
    document.title = "Checkout | Caseland";
  },
};
</script>

<style scoped>
.checkout__title {
  text-align: left;
  margin-bottom: 2rem;
}

.checkout__no-products {
  text-align: left;
}

.checkout__total {
  text-align: left;
  border-left: 2px solid rgb(166, 166, 166);
}
</style>