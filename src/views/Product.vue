<template>
  <div class="product">
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12" lg="6">
          <h1>{{ $route.params.name }}</h1>
          <img :src="`${$route.params.image}`" class="product__image" :alt="`${$route.params.name}`">
        </b-col>
        <b-col sm="12" lg="6">
          <p>Descripción</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    name: String,
    image: String,
  },
}
</script>

<style scoped>
  .product__image {
    width: 100%;
  }
</style>