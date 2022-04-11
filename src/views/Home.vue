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
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductCatalog from "../components/ProductCatalog.vue"
import WildflowersCase from "../assets/products/wildflowers-case.webp"

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
    products: [
      {
        "id": 1,
        "name": "Carcasa Wildflowers iPhone",
        "slug": "carcasa-wildflowers",
        "description": "Con un perfil delgado, un acabado antiarañazos y detalles dorados, nuestras fundas para iPhone mantienen su teléfono bonito y protegido, todo mientras deja que su color brille.",
        "image": WildflowersCase,
        "category": "iphone",
      },
      {
        "id": 2,
        "name": "Carcasa Wildflowers iPhone 2",
        "slug": "carcasa-wildflowers-2",
        "description": "Con un perfil delgado, un acabado antiarañazos y detalles dorados, nuestras fundas para iPhone mantienen su teléfono bonito y protegido, todo mientras deja que su color brille.",
        "image": WildflowersCase,
        "category": "iphone",
      }
    ],
    
  }),
}
</script>

<style scoped>
  .product-catalog {
    display: flex;
    justify-content: space-between;
  }
</style>