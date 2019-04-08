let getters = {
    users: state => {
        return state.users
    },
    currentUser: state => {
        return state.currentUser
    },
    isLoggedIn: state => {
        // if (state.token) return true
        return state.token ? true : false
    },
    albums: state => {
        return state.albums
    }
}

export default getters
