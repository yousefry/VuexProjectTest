import axios from 'axios'
import { SET_PRODUCTS_MUTATIONS } from '../types.js'

export default {
    async getProducts(context) {

        const { data } = await axios.get('https://gist.githubusercontent.com/yousefry/1a28a4feaccedd6ddab3746899645555/raw/2ee20ef04b7fd62525ba7970c41facab9444da02/products.json')
        context.commit(SET_PRODUCTS_MUTATIONS, data)
            // context.dispatch('log')
            // console.log(context.rootGetters['userModules/name']); // this code dispach getter name from modules user
            // console.log(context.rootState.userModules.user.name) // this code get state user.name from modules user
        context.dispatch('userModules/log', null, { root: true })
        context.commit('userModules/SET_NAME_USER', null, { root: true })
    },
    log() {
        console.log('this is token from getProducts : ');
    }
}