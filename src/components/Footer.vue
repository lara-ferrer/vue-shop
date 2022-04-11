<template>
    <footer class="footer">
        <img src="../assets/images/logo.png" class="footer__logo" alt="Logotipo Caseland">
        <p class="footer__copy">&copy; 2022 Lara Ferrer</p>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
  .footer {
    background-color: #864EBE;
    color: #fff;
    padding: 2rem 0;
    text-align: center;
  }
  
  .footer__logo {
    width: 10%;
  }

  .footer__copy {
    margin-top: 1rem;
  }
</style>