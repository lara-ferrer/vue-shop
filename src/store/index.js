import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products';
import cart from './modules/cart';
import categories from './modules/categories';
import orders from './modules/orders';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        products,
        cart,
        categories,
        orders
    }
});
