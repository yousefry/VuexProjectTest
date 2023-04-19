import axios from 'axios'
import { SET_PRODUCTS_MUTATIONS } from './types.js'
import state from './store/state.js'
import getters from './store/getters.js'
import mutations from './store/mutations.js'
import actions from './store/actions.js'
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}