import axios from 'axios'

export default {
    namespaced: true,
    strict: false,
    state: () => ({
        albums: [],
        singleAlbum: null,
    }),

    mutations: {
        FETCH_ALBUMS (state, payload) {
            state.albums = payload
        },
        SINGLE_ALBUM (state, payload) {
            state.singleAlbum = payload
        },
    },

    actions: {
        async addAlbum (context, payload) {
            try {
                const album = await axios.post('/api/albums', payload)
                console.log('Finall: ', album)
                context.dispatch('fetchAlbums')
            } catch (error) {
                console.log(error.response)
            }
        },

        async fetchAlbums (context) {
            try {
                const albums = await axios.get('/api/albums')
                console.log(albums)
                context.commit('FETCH_ALBUMS', albums.data)
            } catch (error) {
                console.log('ERROR FETCH ALBUMS: ', error)
                // commit('ERROR_MSG', error)
            }
        },

        async fetchSingleAlbum (context, payload) {
            try {

                const album = await axios.get(`/api/albums/${ payload }`)
                // axios.get(`/api/albums/${this.albumId}`).then((response) => {
                //     console.log('ID PAGE: ', response)
                // }).catch(error => {
                    console.log(album)
                // })
                context.commit('SINGLE_ALBUM', album.data)
            } catch (error) {
                console.log('ERROR: ', error)
                // commit('ERROR_MSG', error)
            }
        },
    },

    getters: {
        albums: state => {
            return state.albums
        },
        singleAlbum: state => {
            return state.singleAlbum
        },
    }
}
