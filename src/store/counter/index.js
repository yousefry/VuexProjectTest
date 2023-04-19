export default {
    namespaced: true,
    state: () => ({
        counter: 0,
    }),
    getters: {

    },
    mutations: {
        INCREMENT(state) {
            state.counter++
        },
        DECREMENT(state) {
            state.counter--
        }
    },
    actions: {
        incAct({ commit }) {
            commit('INCREMENT')
        },
        minusAct({ commit }) {
            commit('DECREMENT')
        }
    }
}