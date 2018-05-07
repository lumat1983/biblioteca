import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import dashboard from '../components/dashboard/dashboard.vue'
import page404 from '../components/error/404.vue'

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: dashboard
        },
        {
            path: '*',
            component: page404
        }
    ]
})
