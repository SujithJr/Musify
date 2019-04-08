import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state';
import router from '../routes'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken')

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
