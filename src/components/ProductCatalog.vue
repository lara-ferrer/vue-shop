<template>
  <div class="product-catalog__item">
    <img :src="`${image}`" class="product-catalog__image" :alt="`${name}`">
    <div class="product-catalog__content">
      <span class="product-catalog__category">{{ categories.name }}</span>
      <h2 class="product-catalog__title">{{ name }}</h2>
      <p>{{ description }}</p>
      <div class="product-catalog__buttons">
        <router-link :to="{ name: 'Product', params: { category, product, name, description, image, price, slug, stock } }" class="button">Ver producto</router-link>
        <a href="#" class="button">Añadir al carrito</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProductCatalog',
  props: {
    name: String,
    image: String,
    description: String,
    categoryId: String,
    slug: String,
    price: String,
    stock: String,
  },
  methods: {
    ...mapActions(['fetchCategoriesById']),
  },
  computed: {
    ...mapGetters(["categories"]),
  },
  created() {
    this.fetchCategoriesById(this.categoryId)
  }
}
</script>

<style scoped>
  .product-catalog__item {
      border: 1px solid #e0e0e0;
  }

  .product-catalog__image {
    width: 50%;
  }

  .product-catalog__content, .product-catalog__category, .product-catalog__title {
    margin: 1rem 0;
  }

  .product-catalog__category {
    padding: 0.5rem;
    background-color: #864EBE;
    color: #fff;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  .product-catalog__buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
</style>