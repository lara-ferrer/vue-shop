<template class="checkout">
  <b-container>
    <b-row>
      <b-col sm="12" md="8">
        <h1 class="checkout__title">Checkout</h1>
        <div v-if="cart.length">
          <div v-for="product in cart" :key="product.id">
            <CartList
              :id="product.id"
              :productId="product.productId"
              :quantity="product.quantity"
            />
          </div>
        </div>
        <div v-else>
          <p class="checkout__no-products">No hay productos en el carrito</p>
        </div>
      </b-col>
      <b-col sm="12" md="3" class="checkout__total">
        <div class="checkout__resume">
          <h3 class="checkout__total__title">Resumen del pedido</h3>
          <div class="checkout__total__table">
            <div class="checkout__total__item">
              <p>Total de productos</p>
              <CartTotal />
            </div>
            <div class="checkout__total__item">
              <p>Envío</p>
              <p>¡INCLUÍDO!</p>
            </div>
            <div class="checkout__total__item">
              <p>TOTAL</p>
              <CartTotal />
            </div>
          </div>
        </div>
        <button class="button mt-4" @click="addOrder(cart)">Hacer pedido</button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import CartList from "../components/Cart/CartList.vue";
import CartTotal from "../components/Cart/CartTotal.vue";
import axios from 'axios';

export default {
  name: 'Checkout',
  components: {
    CartList,
    CartTotal
  },
  methods: {
    async addOrder(cart) {
      await axios.post('http://localhost:3000/orders', cart);
      this.$router.push({ path: '/orders' })
    },
  },
  computed: {
    ...mapGetters(['cart']),
  },
  mounted() {
    document.title = 'Checkout | Caseland'
  },
}
</script>

<style scoped>
  .row {
    gap: 1em;
  }
  .checkout__title {
    text-align: left;
    margin-bottom: 2rem;
  }

  .checkout__no-products {
    text-align: left;
  }

  .checkout__total {
    text-align: left;
    border: 1px solid rgb(166, 166, 166);
    padding: 2em;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .checkout__total__table {
    margin: 1em 0 2em 0;
  }

  .checkout__total__item {
    display: flex;
    border-bottom: 1px solid rgb(212, 212, 212);
    justify-content: space-between;
    align-self: center;
    padding: 0.5em 0;
  }

  .checkout__total__item p {
    margin: 0;
  }

  .checkout__total__item:first-child {
    border-top: 1px solid rgb(212, 212, 212);
  }

  .checkout__total__item:last-child {
    border-bottom: none;
  }

  .checkout__total__item:last-child, .checkout__total__item:last-child p {
    font-weight: 700;
  }

  .button {
    text-align: center;
  }
</style>