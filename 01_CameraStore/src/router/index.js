/*
  Demo-00: Setting Up Vue Router for Vue to Use
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Store.vue'
Vue.use(VueRouter)

//Definiert die Pfade
export const routes = [
    {
        path: '/store',
        name: 'store',
        component: Home
    }, {
        path: '/about',
        name: 'about',
        component: () =>
            import('../views/About.vue')
    },{
        path: '/kontakt',
        name: 'kontakt',
        component: () =>
            import('../views/Kontakt.vue'),
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.replace({ path: 'store', redirect: '/' })
export default router
