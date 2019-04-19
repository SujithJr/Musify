import router from '../routes'

let actions = {




    // async createArtist ({ commit, dispatch, getters }, payload) {
    //     try {
    //         if (!getters.loading) {
    //             commit('LOADING', true)
    //         }
    //         const artist = await axios.post('api/register', payload)
    //         console.log(artist)
    //         dispatch('success', artist.data)
    //         dispatch('fetchArtists')
    //         commit('LOADING', false)
    //     } catch (error) {
    //         commit('LOADING', false)
    //         console.log(error.response)
    //     }
    // },

    // async fetchArtists ({ commit, getters }) {
    //     try {
    //         if (!getters.loading) {
    //             commit('LOADING', true)
    //         }
    //         const artists = await axios.get('api/artists')
    //         console.log('Artistsssss: ', artists)
    //         commit('FETCH_ARTISTS', artists.data)
    //         commit('LOADING', false)
    //     } catch (error) {
    //         commit('LOADING', false)
    //         console.log('ERROR: ', error.response)
    //         commit('ERROR_MSG', error)
    //     }
    // },

    // async createMusician ({ commit, dispatch, getters }, payload) {
    //     try {
    //         if (!getters.loading) {
    //             commit('LOADING', true)
    //         }
    //         const musician = await axios.post('api/register', payload)
    //         console.log(musician)
    //         dispatch('success', musician.data)
    //         dispatch('fetchMusician')
    //         commit('LOADING', false)
    //     } catch (error) {
    //         commit('LOADING', false)
    //         console.log(error.response)
    //     }
    // },

    // async fetchMusicians ({ commit, getters }) {
    //     try {
    //         if (!getters.loading) {
    //             commit('LOADING', true)
    //         }
    //         const musician = await axios.get('api/musicians')
    //         console.log('Musicians: ', musician)
    //         commit('FETCH_MUSICIANS', musician.data)
    //         commit('LOADING', false)
    //     } catch (error) {
    //         commit('LOADING', false)
    //         console.log('ERROR: ', error.response)
    //         commit('ERROR_MSG', error)
    //     }
    // },

    // async createDirector ({ commit, dispatch, getters }, payload) {
    //     try {
    //         if (!getters.loading) {
    //             commit('LOADING', true)
    //         }
    //         const director = await axios.post('api/register', payload)
    //         console.log(director)
    //         dispatch('success', director.data)
    //         dispatch('fetchDirectors')
    //         commit('LOADING', false)
    //     } catch (error) {
    //         commit('LOADING', false)
    //         console.log(error.response)
    //     }
    // },

    // async fetchDirectors ({ commit, getters }) {
    //     console.log('Yoo Director')
    //     try {
    //         if (!getters.loading) {
    //             commit('LOADING', true)
    //         }
    //         const directors = await axios.get('api/directors')
    //         console.log('Directors: ', directors)
    //         commit('FETCH_DIRECTORS', directors.data)
    //         commit('LOADING', false)
    //     } catch (error) {
    //         commit('LOADING', false)
    //         console.log('ERROR: ', error.response)
    //         commit('ERROR_MSG', error)
    //     }
    // },

    // async loading ({ commit }, payload) {
    //     commit('LOADING', payload)
    // },

    // async success ({ commit }, payload) {
    //     commit('SUCCESS_MSG', payload)
    // },

    // async error ({ commit }, payload) {
    //     commit('ERROR_MSG', payload)
    // }
}

export default actions
