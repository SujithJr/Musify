require('./bootstrap');
window.Vue = require('vue');

import moment from 'moment'
import Snotify from 'vue-snotify'

import router from './routes'
import store from './store'
import dateFormat from '../js/filters/dateFormat'
import roleFilter from '../js/filters/roleFilter'

Vue.component('app-layout', require('./components/AppLayout.vue').default);
Vue.component('login', require('./components/Login.vue').default);

Vue.use(Snotify);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        store().getters.isLoggedIn ? next() : next({ name: 'login' })
    } else if (to.matched.some(record => !record.meta.requiresAuth)) {
        store().getters.isLoggedIn ? next({ name: 'home' }) : next()
    } else {
        next()
    }
    // to.matched.some(record => record.meta.requiresAuth) ? ( store.getters.isLoggedIn ? next() : next({ name: 'login' }) ) : ( store.getters.isLoggedIn ? next({ name: 'albums' }) : next() )
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    store,
    created () {
        if (this.$store.getters['isLoggedIn']) {
            this.$store.dispatch('currentUser', { root: true })
        }
    },
});
