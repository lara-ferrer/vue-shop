import axios from 'axios';

const resourceURI = "https://localhost:5001/Category";

const state = {
    categories: [],
    category: {}
};

const getters = {
    categories: state => state.categories
};

const actions = {
    async fetchCategories({ commit }) {
        const response = await axios.get(resourceURI);    
        commit('setCategories', response.data);
    },
    async fetchCategoriesById({ commit }, id) {
        const response = await axios.get(`${resourceURI}/${id}`);    
        commit('setCategoriesById', response.data);
    },
    async addCategory( { commit }, category) {
        const response = await axios.post(resourceURI, category);
        commit('newCategory', response.data);
    },
    async updateCategory( { commit }, category) {
        const response = await axios.put(`${resourceURI}/${category.id}`, category);
        commit('updateCategory', response.data);
    },
    async removeCategory( { commit }, category) {
        await axios.delete(`${resourceURI}${category.id}`);
        commit('deleteCategory', category);
    }
};

const mutations = {
    setCategories: (state, categories) => state.categories = categories,
    setCategoriesById: (state, categories) => state.categories = categories,
    newCategory: (state, category) => state.categories.unshift(category),
    updateCategory: (state, updatedCategory) => {
        const index = state.categories.findIndex(p => p.id === updatedCategory.id);
        if(index !== -1) {
            state.categories.splice(index, 1, updatedCategory);
        }        
    },
    deleteCategory: (state, category) => state.categories = state.categories.filter(p => category.id !== p.id),
};

export default {
    state, getters, actions, mutations
}
