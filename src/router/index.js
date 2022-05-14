import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Checkout from '../views/Checkout.vue'
import OrderConfirmed from '../views/OrderConfirmed.vue'
import Category from '../views/Category.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  { 
    path: '/orders',
    name: 'OrderConfirmed',
    component: OrderConfirmed
  },
  { 
    path: '/orders',
    name: 'OrderConfirmed',
    component: OrderConfirmed
  },
  { 
    path: '/:slug',
    name: 'Product',
    component: Product
  },
  { 
    path: '/categoria/:categoryId',
    name: 'Category',
    component: Category
  },
]

const router = new VueRouter({
  routes
})

export default router
