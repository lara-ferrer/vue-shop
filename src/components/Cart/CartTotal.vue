<template>
  <div class="cart__total-amount">{{ totalPrice }} €</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartTotal",
  computed: {
    ...mapGetters(["cart", "products"]),
    totalPrice() {
      let finalPrice = 0;

      this.cart.map((item) => {
        const product = this.products.filter(
          (product) => product.id === item.productId
        )[0];
        finalPrice += item.quantity * product.price;
      });

      return finalPrice.toFixed(2);
    },
  },
};
</script>

<style scoped>
.cart__total-amount {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #864ebe;
}
</style>