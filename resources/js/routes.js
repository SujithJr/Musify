import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    saveScrollPosition: true,
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('./pages/home/index.vue').default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/album',
            name: 'albums',
            component: require('./pages/albums/index.vue').default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/album/:albumId/single',
            name: 'singleAlbum',
            component: require('./pages/albums/_id.vue').default,
            props: true,
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
            path: '/musician/:musicianId/single',
            name: 'singleMusician',
            component: require('./pages/musicians/_id.vue').default,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/director',
            name: 'directors',
            component: require('./pages/directors/index.vue').default,
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
            redirect: '/',
            meta: {
                requiresAuth: true
            }
        },
    ]
})

export default router
