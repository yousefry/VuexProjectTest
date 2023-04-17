import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
    state: () => ({
        products: [],
        user: { name: 'yousef', id: 1 }
    }),
    getters: {

    },
    mutations: {
        SET_PRODUCTS(state, data) {
            state.products = data
        }
    },
    actions: {
        async getProducts({ commit }) {
            const { data } = await axios.get('https://gist.githubusercontent.com/yousefry/1a28a4feaccedd6ddab3746899645555/raw/2ee20ef04b7fd62525ba7970c41facab9444da02/products.json')
            commit('SET_PRODUCTS', data)
        }
    }
});
export default store