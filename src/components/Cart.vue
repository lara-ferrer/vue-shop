<template>
    <div class="cart">
        <p>Carrito</p>
        <router-link to="/checkout" class="button">Checkout</router-link>
    </div>
</template>

<script>
export default {
  name: 'Cart',
  
}
</script>

<style scoped>
    .cart {
        background-color: #fff;
        border: 1px solid #000;
        position: absolute;
        top: 5rem;
        right: 1rem;
        width: 200px;
        padding: 2em;
        color: #000;
    }
</style>