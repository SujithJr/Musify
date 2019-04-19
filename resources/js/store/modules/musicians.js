import axios from 'axios'

export default {
    namespaced: true,
    strict: false,
    state: () => ({
        musicians: [],
    }),

    mutations: {
        FETCH_MUSICIANS(state, payload) {
            state.musicians = payload
        },
    },

    actions: {
        async createMusician ({ commit, dispatch, getters }, payload) {
            try {
                const musician = await axios.post('api/register', payload)
                console.log(musician)
                dispatch('success', musician.data)
                dispatch('fetchMusician')
            } catch (error) {
                console.log(error.response)
            }
        },

        async fetchMusicians ({ commit, dispatch }) {
            try {
                const musician = await axios.get('api/musicians')
                console.log('Musicians: ', musician)
                commit('FETCH_MUSICIANS', musician.data)
            } catch (error) {
                console.log('ERROR: ', error.response)
                // commit('ERROR_MSG', error)
            }
        },
    },

    getters: {
        musicians: state => {
            return state.musicians
        },
    }
}
