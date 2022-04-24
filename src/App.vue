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
  },
  methods: {
    ...mapActions(['fetchProducts', 'fetchCategories'])
  },
  computed: {
    isMock() {
      return process.env.VUE_APP_API_IS_MOCK === "true"
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  main {
    margin: 5rem 0;
  }
  
  .button {
    padding: 0.5rem 1rem;
    background-color: #864EBE;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    transition: 0.2s ease-in;
  }

  .button:hover {
    background-color: #9f70ce;
    color: #fff;
    transition: 0.ws ease-in;
  }
</style>
