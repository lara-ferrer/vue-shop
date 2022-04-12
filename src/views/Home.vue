<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12" lg="4" v-for="product in products" :key="product.id">
          <ProductCatalog 
            :name="product.name"
            :image="product.image"
            :description="product.description"
            :category="product.category"
            :slug="product.slug"
            :price="product.price"
            :stock="product.stock"
          />
          {{ info }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductCatalog from "../components/ProductCatalog.vue"
import axios from "axios";

export default {
  name: 'Inicio',
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
  components: {
    ProductCatalog
  },
  data: () => ({
    products: null
  }),
  async created() {
    try {
      const response = await axios.get(`https://localhost:5001/Product`)
      this.products = response.data
    } catch {
      console.log('Error al obtener los datos.')
    }
  }
}
</script>

<style scoped>
  .product-catalog {
    display: flex;
    justify-content: space-between;
  }
</style>