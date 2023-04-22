import { createStore } from "vuex";
import axios from "axios";
// import { SET_PRODUCTS_MUTATIONS } from './products/types.js'

import state from './products/store/state.js'
import getters from './products/store/getters.js'
import mutations from './products/store/mutations.js'
import actions from './products/store/actions.js'

import user from './user/index.js';
import products from './products/index.js';
import counter from './counter/index.js';

// import { namespaced, stat } from "./cart/index.js";      // #1 to import cart modules
import * as cart from './cart' // #2 import cart

const store = createStore({
    // state,
    // getters,
    // mutations,
    // actions,


    modules: {
        cart,
        counter: counter,
        userModules: user,
        allProducts: products
    }
    // state: () => ({
    //     products: [],
    //     user: { name: 'yousef', id: 1 }
    // }),
    // getters: {
    //     products(state) {
    //         return state.products
    //     },
    //     userName(state) {
    //         return state.user.name
    //     },
    //     getProductById: (state) => (id) => {
    //         return state.products.find(product => product.id === id)
    //     },
    //     log() {
    //         console.log('its ok')
    //     }
    // },
    // mutations: {
    //     [SET_PRODUCTS_MUTATIONS](state, data) {
    //         state.products = data
    //     }
    // },
    // actions: {
    //     async getProducts({ commit, dispatch }) {
    //         const { data } = await axios.get('https://gist.githubusercontent.com/yousefry/1a28a4feaccedd6ddab3746899645555/raw/2ee20ef04b7fd62525ba7970c41facab9444da02/products.json')
    //         commit(SET_PRODUCTS_MUTATIONS, data)
    //         dispatch('log')
    //     },
    //     log() {
    //         console.log('this is token from getProducts : ');
    //     }
    // }

});
export default store