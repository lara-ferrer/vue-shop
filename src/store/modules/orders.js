import axios from 'axios';

const resourceURI = "https://localhost:5001/Order";

const state = {
    orders: [],
};

const getters = {
    orders: state => state.orders
};

let config = { 
    headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*'
    }
}

const actions = {
    async fetchOrders({ commit }) {
        const response = await axios.get(resourceURI);    
        commit('setOrder', response.data);
    },
    async addOrder({ commit }, cart) {
        const parsedOrderDetails = JSON.parse(JSON.stringify(cart));
        const finalOrder = {
            orderDetails: parsedOrderDetails
        }
        console.log(finalOrder);
        const response = await axios.post(resourceURI, finalOrder, config);
        commit('newOrder', response.data);
    },
    async updateOrder( { commit }, order) {
        const response = await axios.put(resourceURI, order, config);
        commit('updateOrder', response.data);
    },
    async removeOrder( { commit }, order) {
        await axios.delete(`${resourceURI}/${order.id}`);
        commit('deleteOrder', order);
    }
};

const mutations = {
    setOrder: (state, order) => state.orders = order,
    newOrder: (state, order) => state.orders.unshift(order),
    newError: (state) => state.error = 'Error en el pedido',
    updateOrder: (state, updatedOrder) => {
        const index = state.orders.findIndex(p => p.id === updatedOrder.id);
        if (index !== -1) {
            state.order.splice(index, 1, updatedOrder);
        }
    },
    deleteOrder: (state, order) => state.orders = state.order.filter(p => order.id !== p.id),
};

export default {
    state, getters, actions, mutations
}
