<template>
  <div class="related-products">
    <h2>Productos relacionados</h2>
    <div class="related-products__container">
      <div class="related-products__item" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.name" class="related-products__image">
        <h3 class="related-products__title">{{ product.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductsCarousel',
  methods: {
    ...mapActions(['fetchProducts'])
  },
  computed: mapGetters(['products']),
  created() {
    this.fetchProducts()
  }
}
</script>

<style scoped>
  .related-products {
    margin-top: 6rem;
  }

  .related-products__container {
    display: flex;
  }

  .related-products__item {
    width: 20%;
  }

  .related-products__image {
    width: 100%;
  }

  .related-products__title {
    margin-top: 1rem;
  }
</style>