import axios from 'axios'

export default {
    namespaced: true,
    strict: false,
    state: () => ({
        directors: [],
    }),

    mutations: {
        FETCH_DIRECTORS(state, payload) {
            state.directors = payload
        },
    },

    actions: {
        async createDirector ({ commit, dispatch, getters }, payload) {
            try {
                const director = await axios.post('api/register', payload)
                console.log(director)
                dispatch('success', director.data)
                dispatch('fetchDirectors')
            } catch (error) {
                console.log(error.response)
            }
        },

        async fetchDirectors ({ commit, dispatch }) {
            console.log('Yoo Director')
            try {
                const directors = await axios.get('api/directors')
                console.log('Directors: ', directors)
                commit('FETCH_DIRECTORS', directors.data)
            } catch (error) {
                console.log('ERROR: ', error.response)
                // commit('ERROR_MSG', error)
            }
        },
    },

    getters: {
        directors: state => {
            return state.directors
        },
    }
}
