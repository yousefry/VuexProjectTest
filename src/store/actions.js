import axios from 'axios'
import { SET_PRODUCTS_MUTATIONS } from './types.js'

export default {
    async getProducts({ commit, dispatch }) {
        const { data } = await axios.get('https://gist.githubusercontent.com/yousefry/1a28a4feaccedd6ddab3746899645555/raw/2ee20ef04b7fd62525ba7970c41facab9444da02/products.json')
        commit(SET_PRODUCTS_MUTATIONS, data)
        dispatch('log')
    },
    log() {
        console.log('this is token from getProducts : ');
    }
}