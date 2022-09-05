import axios from 'axios';

const resourceURI = "https://localhost:5001/Cart";

const state = {
    cart: []
};

const getters = {
    cart: state => state.cart
};

let config = { 
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    }
}

const actions = {
    async fetchCart({ commit }) {
        const response = await axios.get(resourceURI);    
        commit('setCart', response.data);
    },
    async addToCart( { commit }, cart) {
        const response = await axios.post(resourceURI, cart, config);
        commit('newCart', response.data);
    },
    async updateCart( { commit }, cart) {
        const response = await axios.put(resourceURI, cart, config);
        commit('updateCart', response.data);
    },
    async removeCart( { commit }, cart) {
        await axios.delete(`${resourceURI}/${cart.id}`);
        commit('deleteCart', cart);
    },
    async removeAllCart( { commit }, cart) {
        const parsedCartDetails = JSON.parse(JSON.stringify(cart));
        await axios.delete(resourceURI, { data: parsedCartDetails }, config);
        commit('deleteCart', cart);
    }
};

const mutations = {
    setCart: (state, cart) => state.cart = cart,
    newCart: (state, cart) => state.cart.unshift(cart),
    updateCart: (state, updatedCart) => {
        const index = state.cart.findIndex(p => p.id === updatedCart.id);
        if (index !== -1) {
            state.cart.splice(index, 1, updatedCart);
        }
    },
    deleteCart: (state, cart) => state.cart = state.cart.filter(p => cart.id !== p.id),
};

export default {
    state, getters, actions, mutations
}
