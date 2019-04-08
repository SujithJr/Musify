let actions = {
    login ({ commit, dispatch }, payload) {
        try {
            axios.post('api/login', payload).then((response) => {
                console.log('Response: ', response)
                dispatch('storeToken', response.data.access_token)
                commit('STORE_TOKEN', response.data.access_token)
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
                dispatch('currentUser')
                router.push('/albums')
            })
        } catch (error) {
            console.log(error.response)
        }
    },

    storeToken ({ commit }, payload) {
        localStorage.setItem('accessToken', payload)
    },

    async currentUser ({ commit }) {
        try {
            const user = await axios.get('api/users/me')
            console.log(user)
            commit('CURRENT_USER', user.data)
        } catch (error) {
            console.log(error.response)
        }
    },

    async fetchUsers ({ commit }) {
        try {
            const users = await axios.get('api/users')
            console.log(users)
            commit('FETCH_USERS', users.data)
        } catch (error) {
            console.log(error.response)
        }
    },

    logout ({ commit }) {
        axios.post('api/logout').then((response) => {
            localStorage.removeItem('accessToken')
            commit('DESTROY_TOKEN')
            router.replace('/login')
        }).catch (error => {
            localStorage.removeItem('accessToken')
            commit('DESTROY_TOKEN')
            router.replace('/login')
            console.log(error)
        })
    },

    async addAlbum ({ commit, dispatch }, payload) {
        try {
            const album = await axios.post('api/albums', payload)
            console.log('Finall: ', album)
            dispatch('fetchAlbums')
        } catch (error) {
            console.log(error.response)
        }
    },

    async fetchAlbums ({ commit }) {
        try {
            const albums = await axios.get('api/albums')
            console.log(albums)
            commit('FETCH_ALBUMS', albums.data)
        } catch (error) {
            console.log('ERROR: ', error.response)
            commit('ERROR_MSG', error)
        }
    },

    success ({ commit }, payload) {
        commit('SUCCESS_MSG', payload)
    },

    error ({ commit }, payload) {
        commit('ERROR_MSG', payload)
    }
}

export default actions
