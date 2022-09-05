<template>
  <div class="home">
    <div class="hero">
      <h1>Carcasas originales y con estilo</h1>
      <h3>Convierte tu móvil en un súper accesorio con nuestras carcasas</h3>
    </div>
    <b-container class="new-products">
      <b-row>
        <b-col sm="12" lg="12">
          <h2 class="new-products__title">Últimos productos añadidos</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          sm="12"
          lg="4"
          v-for="product in products.slice(0, 3)"
          :key="product.id"
        >
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
      <b-row>
        <router-link :to="{ name: 'Tienda' }" class="button button--shop"
          >Ver catálogo completo</router-link
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCatalog from "../components/ProductCatalog.vue";
import { BContainer } from "bootstrap-vue";
import { BRow } from "bootstrap-vue";
import { BCol } from "bootstrap-vue";

export default {
  name: "Inicio",
  components: {
    ProductCatalog,
    BContainer,
    BRow,
    BCol,
  },
  mounted() {
    document.title = "Caseland | Accesorios a la moda";
  },
  computed: mapGetters(["products"]),
};
</script>

<style scoped>
.hero {
  background-image: url("../assets/images/hero.jpg");
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

.button--shop {
  width: 30%;
  margin: 4rem auto 3rem auto;
}
</style>