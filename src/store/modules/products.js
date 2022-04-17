import axios from 'axios';

const resourceURI = "https://localhost:5001/Product";

const state = {
    products: []
};

const getters = {
    products: state => state.products
};

const actions = {
    async fetchProducts({ commit }) {
        const response = await axios.get(resourceURI);    
        commit('setProducts', response.data);
    },
    async addProduct( { commit }, product) {
        const response = await axios.post(resourceURI, product);
        commit('newProduct', response.data);
    },
    async updateProduct( { commit }, product) {
        const response = await axios.put(`${resourceURI}${product.id}`, product);
        commit('updateProduct', response.data);
    },
    async removeProduct( { commit }, product) {
        await axios.delete(`${resourceURI}${product.id}`);
        commit('deleteProduct', product);
    }
};

const mutations = {
    setProducts: (state, products) => state.products = products,
    newProduct: (state, product) => state.products.unshift(product),
    updateProduct: (state, updatedProduct) => {
        const index = state.products.findIndex(p => p.id === updatedProduct.id);
        if(index !== -1) {
            state.products.splice(index, 1, updatedProduct);
        }        
    },
    deleteProduct: (state, product) => state.products = state.products.filter(p => product.id !== p.id),
};

export default {
    state, getters, actions, mutations
}
