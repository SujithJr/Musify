import axios from 'axios'

export default {
    namespaced: true,
    strict: false,
    state: () => ({
        artists: [],
    }),

    mutations: {
        FETCH_ARTISTS(state, payload) {
            state.artists = payload
        },
    },

    actions: {
        async createArtist ({ commit, dispatch, getters }, payload) {
            try {
                const artist = await axios.post('api/register', payload)
                console.log(artist)
                dispatch('success', artist.data)
                dispatch('fetchArtists')
            } catch (error) {
                console.log(error.response)
            }
        },

        async fetchArtists ({ commit, dispatch }) {
            try {
                const artists = await axios.get('api/artists')
                console.log('Artistsssss: ', artists)
                commit('FETCH_ARTISTS', artists.data)
            } catch (error) {
                console.log('ERROR: ', error.response)
                // commit('ERROR_MSG', error)
            }
        },
    },

    getters: {
        artists: state => {
            return state.artists
        },
    }
}
