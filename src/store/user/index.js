export default {
    namespaced: true,
    state: () => ({
        user: { name: 'yousef', id: 1 }
    }),
    getters: {
        userNames(state) {
            return state.user.name
        },
        name: state => state.user.name
    },
    mutations: {
        SET_NAME_USER(state) {
            state.user.name = 'r-yosuef-r'
        }
    },
    actions: {
        log() {
            console.log('print user')
        }
    }
}