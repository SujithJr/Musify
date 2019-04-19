import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import albums from './modules/albums'
import artists from './modules/artists'
import directors from './modules/directors'
import musicians from './modules/musicians'
import router from '../routes'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')

Vue.use(Vuex);

const store = () => {
    return new Vuex.Store({
        namespaced: true,
        strict: false,
        modules: {
            albums,
            artists,
            directors,
            musicians
        },

        state: () => ({
            users: [],
            currentUser: null,
            token: localStorage.getItem('accessToken') || null,
            success: null,
            error: null
        }),

        mutations: {
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
            SUCCESS_MSG (state, payload) {
                state.success = payload
            },
            ERROR_MSG (state, payload) {
                state.error = payload
            }
        },

        actions: {
            async login (context, payload) {
                try {
                    const response = await axios.post('/api/login', payload)
                    console.log('Response: ', response)
                    context.dispatch('storeToken', response.data.access_token)
                    context.commit('STORE_TOKEN', response.data.access_token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
                    // context.dispatch('currentUser')
                    router.push('/albums')
                } catch (error) {
                    console.log(error)
                }
            },

            storeToken ({ commit }, payload) {
                localStorage.setItem('accessToken', payload)
            },

            success ({ commit }, payload) {
                commit('SUCCESS_MSG', payload)
            },

            error ({ commit }, payload) {
                commit('ERROR_MSG', payload)
            },

            async currentUser (context) {
                try {
                    const user = await axios.get('/api/users/me')
                    console.log(user)
                    context.commit('CURRENT_USER', user.data)
                } catch (error) {
                    console.log(error.response)
                }
            },

            async fetchUsers (context) {
                try {
                    const users = await axios.get('/api/users')
                    console.log(users)
                    context.commit('FETCH_USERS', users.data)
                } catch (error) {
                    console.log(error.response)
                }
            },

            logout ({ commit }) {
                axios.post('/api/logout').then((response) => {
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
        },

        getters: {
            users: state => {
                return state.users
            },
            currentUser: state => {
                return state.currentUser
            },
            isLoggedIn: state => {
                // if (state.token) return true
                return state.token !== null
            },
        }
    })
}

export default store
