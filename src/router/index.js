import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Checkout from '../views/Checkout.vue'
import OrderCompleted from '../views/OrderCompleted.vue'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    path: '/tienda',
    name: 'Tienda',
    component: Shop
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  { 
    path: '/:slug',
    name: 'Product',
    component: Product
  },
  { 
    path: '/order-completed',
    name: 'Order Completed',
    component: OrderCompleted
  },
]

const router = new VueRouter({
  routes
})

export default router
