<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col sm="12" lg="12">
          <h1>Carcasas y fundas para {{ getCategoryInfo.name }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12" lg="4" v-for="product in getProducts" :key="product.id">
          <ProductCatalog
            :id="product.id"
            :name="product.name"
            :image="product.image"
            :description="product.description"
            :categoryId="product.categoryId"
            :slug="product.slug"
            :price="product.price"
            :stock="product.stock"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCatalog from "../components/ProductCatalog.vue"

export default {
  name: 'OrderConfirmed',
  components: {
    ProductCatalog
  },
  props: {
    categoryId: Number,
  },
  mounted() {
    document.title = `Carcasas para ${this.getCategoryInfo.name} | Caseland`
  },
  computed: {
    ...mapGetters(['products', 'categories']), 
    getCategoryInfo() {
      return this.categories.filter(category => category.id === this.$route.params.categoryId)[0]
    },
    getProducts() {
      return this.products.filter(product => product.categoryId === this.$route.params.categoryId)
    },
  }
}
</script>

<style scoped>
</style>