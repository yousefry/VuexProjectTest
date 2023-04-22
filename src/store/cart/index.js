import { ADD_PORUDCT, CHANGE_QUANTITY, REMOVE_PRODUCT } from './types'
export
    const namespaced = true;
const productsInCart = JSON.parse(localStorage.getItem('cart'))?.productsInCart ?? [];
export const state = () => ({
    productsInCart,
});
export const getters = {
    subTotal(state) {
        return state.productsInCart.reduce((prev, item) => {
            return item.price * item.quantity + prev;
        }, 0);
    },
    tax(state,getters) {
        return getters.subTotal * 0.09;
    },
    total(state,getters) {
        return getters.subTotal + getters.tax;
    },
};
export const mutations = {
    [ADD_PORUDCT](state, item) {
        let product = state.productsInCart.find(product => product.id === item.id)
        if (product) {
            product.quantity++
        } else {
            state.productsInCart.push({ ...item, quantity: 1 })
        }
    },
    [CHANGE_QUANTITY](state, item) {
        let product = state.productsInCart.find(product => product.id === item.product.id)
        if (product) {
            product.quantity = item.quantity
        }

    },
    [REMOVE_PRODUCT](state, item) {
        state.productsInCart = state.productsInCart.filter(product => product.id !== item.product.id)

    }
};
export const actions = {
    addProduct({ commit, state }, payload) {
        commit('ADD_PORUDCT', payload)
        localStorage.setItem('cart', JSON.stringify(state))
    },
    chngQuantitiy({ commit, state }, payload) {
        commit('CHANGE_QUANTITY', payload)
        localStorage.setItem('cart', JSON.stringify(state))
    },
    removeProduct({ commit, state }, payload) {
        commit('REMOVE_PRODUCT', payload)
        localStorage.setItem('cart', JSON.stringify(state))
    }
};