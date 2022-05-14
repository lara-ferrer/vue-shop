<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col sm="12" md="4">
          <img
            src="../assets/images/logo.png"
            class="footer__logo"
            alt="Logotipo Caseland"
          />
        </b-col>
        <b-col sm="12" md="4" class="footer__section">
          <h3>Comprar por categoría</h3>
          <div v-for="category in categories" :key="category.id">
            <router-link
              :to="{
                name: 'Category',
                params: category.id,
              }"
              class="footer__link"
            >
              <span>Carcasas y fundas para {{ category.name }}</span>
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters(["categories"]),
  },
};
</script>

<style scoped>
.footer {
  background-color: #864ebe;
  color: #fff;
  padding: 3rem 0;
  text-align: center;
}

.footer__logo {
  width: 50%;
}

.footer__section {
  text-align: left;
}

.footer__link {
  color: #fff;
  transition: 0.4s ease;
}

.footer__link:hover {
  color: rgba(255, 255, 255, 0.71);
  transition: 0.4s ease;
}
</style>