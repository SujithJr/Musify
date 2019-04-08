let mutations = {
    CURRENT_USER (state, payload) {
        state.currentUser = payload
    },
    FETCH_USERS (state, payload) {
        state.users = payload
    },
    STORE_TOKEN (state, payload) {
        state.token = payload
    },
    DESTROY_TOKEN (state) {
        state.token = null
    },
    FETCH_ALBUMS (state, payload) {
        state.albums = payload
    },
    SUCCESS_MSG (state, payload) {
        state.success = payload
    },
    ERROR_MSG (state, payload) {
        state.error = payload
    }
}

export default mutations
