require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import { Form, HasError, AlertError } from 'vform'
import moment from 'moment';

window.form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate', function(date){
    return moment(date).format('MMMM Do YYYY');
});

Vue.use(VueRouter)

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Users from './components/Users';
import Vue from 'vue';

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/profile', component: Profile },
    { path: '/users', component: Users },
  ]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })


const app = new Vue({
    el: '#app',
    router
});
