<template>
  <div class="product">
    <b-container>
      <b-row>
        <b-col sm="12" lg="6">
          <img
            :src="`${$route.params.image}`"
            class="product__image"
            :alt="`${$route.params.name}`"
          />
        </b-col>
        <b-col sm="12" lg="6">
          <h1 class="product__title">{{ $route.params.name }}</h1>
          <div class="product__price">
            <p class="product__amount">{{ $route.params.price }}</p>
            <span class="product__currency">€</span>
          </div>
          <p>{{ $route.params.description }}</p>
          <div class="product__key-points">
            <div class="product__key-point">
              <p>Tiempo de entrega:</p>
              <p>4 días</p>
            </div>
            <div class="product__key-point">
              <p>Stock disponible</p>
              <p>
                {{
                  $route.params.stock > 0
                    ? "Hay existencias"
                    : "No hay existencias"
                }}
              </p>
            </div>
          </div>
          <button
            class="button"
            @click="addToCart({ productId: id, quantity: 1 })"
          >
            Añadir al carrito
          </button>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <RelatedProducts />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import RelatedProducts from "../components/RelatedProducts.vue";
import { BContainer } from "bootstrap-vue";
import { BRow } from "bootstrap-vue";
import { BCol } from "bootstrap-vue";

export default {
  name: "Product",
  components: {
    RelatedProducts,
    BContainer,
    BRow,
    BCol,
  },
  mounted() {
    document.title = this.$route.params.name;
  },
  methods: {
    ...mapActions(["addToCart"]),
  },
};
</script>

<style scoped>
.product__title {
  text-align: left;
}

.product__image {
  width: 100%;
}

.product__price {
  display: flex;
  color: #864ebe;
  font-weight: 800;
}

.product__amount {
  font-size: 3rem;
}

.product__currency {
  align-self: center;
  font-size: 1.5rem;
}

.product__key-points {
  margin: 2rem 0;
}

.product__key-point {
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
}

.product__key-point p {
  margin-bottom: 0;
}

.product__key-point:first-child {
  border-top: 1px solid #e0e0e0;
}

.button--product {
  margin-top: 2rem;
  text-align: left;
}
</style>