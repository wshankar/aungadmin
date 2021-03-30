require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/profile', component: Profile }
  ]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })


const app = new Vue({
    el: '#app',
    router
});
