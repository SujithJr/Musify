import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        // { path: '/login' },
        {
            path: '/albums',
            name: 'albums',
            component: require('./pages/albums/index.vue').default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/artist',
            name: 'artists',
            component: require('./pages/artists/index.vue').default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/musician',
            name: 'musicians',
            component: require('./pages/musicians/index.vue').default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: require('./pages/user/login/index.vue').default,
            meta: {
                requiresAuth: false
            }
        },
        // { path: '/login' },
        {
            path: '*',
            redirect: '/albums'
        },
    ]
})

export default router
