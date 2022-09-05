<template>
  <div class="home">
    <div class="hero">
      <h1>Nuestra Tienda</h1>
      <h3>Elige tu modelo de iPhone, Samsung, Huawei o Xiaomi favorito.</h3>
    </div>
    <b-container class="new-products">
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
import { mapGetters } from "vuex";
import ProductCatalog from "../components/ProductCatalog.vue";

export default {
  name: "Inicio",
  components: {
    ProductCatalog,
  },
  mounted() {
    document.title = "Tienda | Caseland";
  },
  computed: mapGetters(["products"]),
};
</script>

<style scoped>
main {
  margin: 0 0 5rem 0;
}

.hero {
  background-image: url("../assets/images/shop.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10em 0;
  margin-top: -5rem;
  color: #ffffff;
}

.new-products {
  margin-top: 4rem;
}

.new-products__title {
  margin-bottom: 2rem;
}

.product-catalog {
  display: flex;
  justify-content: space-between;
}
</style>