<template>
  <div class="nav">
      <router-link to="/"><img src="../assets/images/logo.png" class="nav__logo" alt="Logotipo Caseland"></router-link>
      <div class="nav__menu">
        <router-link to="/" class="nav__link">Inicio</router-link>
        <b-icon-cart-fill class="nav__cart" @click="showCart()" />
        <div v-if="isCartOpen">
          <Cart @hide-cart="hideCart" />
        </div>
      </div>
    </div>
</template>

<script>
import { BIconCartFill } from 'bootstrap-vue'
import Cart from './Cart/Cart.vue'

export default {
  name: 'Navigation',
  components: {
    BIconCartFill,
    Cart,
  },
  data: () => {
    return {
      isCartOpen: false
    }
  },
  methods: {
    showCart() {
      this.isCartOpen = true;
    },
    hideCart() {
      this.isCartOpen = false;
    }
  }
}
</script>

<style scoped>
  .nav {
    background-color: #864EBE;
    color: #fff;
    padding: 1em 2rem;
    display: flex;
    justify-content: space-between;
  }
  
  .nav__logo {
    width: 50%;
  }

  .nav__menu {
    align-self: center;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }

  .nav__link, .nav__cart {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.2rem;
  }

  .nav__cart {
    cursor: pointer;
  }
</style>