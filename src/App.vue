<template>
  <div id="app">
    <Navigation />
    <h1 v-if="isMock">Working with MOCK data</h1>
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navigation from "./components/Navigation.vue"
import Footer from "./components/Footer.vue"

export default {
  components: {
    Navigation,
    Footer
  },
  created() {
    this.fetchProducts()
    this.fetchCategories()
    this.fetchCart()
  },
  methods: {
    ...mapActions(['fetchProducts', 'fetchCategories', 'fetchCart'])
  },
  computed: {
    isMock() {
      return process.env.VUE_APP_API_IS_MOCK === "true"
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&display=swap');

  #app {
    font-family: 'Nunito Sans', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  main {
    margin: 5rem 0;
  }

  h1 {
    font-weight: 800!important;
    font-size: 3rem!important;
  }

  h2 {
    font-weight: 800!important;
    font-size: 2rem!important;
  }

  h3 {
    font-weight: 700!important;
    font-size: 1.2rem!important;
  }
  
  p, span {
    font-weight: 400;
  }
  
  .button {
    padding: 0.5rem 1rem;
    background-color: #864EBE;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    transition: 0.2s ease-in;
    border: none;
  }

  .button:hover {
    background-color: #9f70ce;
    color: #fff;
    transition: 0.ws ease-in;
  }
</style>
