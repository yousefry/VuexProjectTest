import state from "./state"

export default {
    products(state) {
        return state.products
    },
    getProductById: (state) => (id) => {
        return state.products.find(product => product.id === id)
    },
    log() {
        console.log('its ok')
    },
    // name: state => state.products
}