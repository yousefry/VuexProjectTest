export default {
    products(state) {
        return state.products
    },
    userName(state) {
        return state.user.name
    },
    getProductById: (state) => (id) => {
        return state.products.find(product => product.id === id)
    },
    log() {
        console.log('its ok')
    }
}