/*
  Demo-00: Setting Up Vue Router for Vue to Use
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

//Defining the Routes
export const routes = [
    {
        path: '/home',
        name: 'home',
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

//Setting up the Router Instance
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.replace({ path: 'home', redirect: '/' })
export default router
