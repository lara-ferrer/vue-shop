<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12" lg="4" v-for="product in products" :key="product.id">
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
  name: 'Inicio',
  components: {
    ProductCatalog
  },
  head: {
    title: {
      inner: 'Caseland',
      separator: '|',
      complement: 'Accesorios a la moda'
    },
    meta: [
      { name: 'description', content: 'My description' }
    ]
  },
  computed: mapGetters(['products']),
}
</script>

<style scoped>
  .product-catalog {
    display: flex;
    justify-content: space-between;
  }
</style>