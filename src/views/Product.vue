<template>
  <div class="product">
    <b-container>
      <b-row>
        <b-col sm="12" lg="6">
          <img :src="`${$route.params.image}`" class="product__image" :alt="`${$route.params.name}`">
        </b-col>
        <b-col sm="12" lg="6">
          <h1 class="product__title">{{ $route.params.name }}</h1>
          <div class="product__price">
            <p class="product__amount">{{ $route.params.price }}</p><span class="product__currency">€</span>
          </div>
          <p>{{ $route.params.description }}</p>
          <div class="product__key-points">
            <p>Tiempo de entrega:</p>
            <p>5 días</p>
          </div>
          <a href="#" class="button button--product">Añadir al carrito</a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Product',
}
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
    color: #864EBE;
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
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
  }

  .button--product {
    margin-top: 2rem;
    text-align: left;
  }
</style>