
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App.vue'
import routes from './router.js';
import Vuex from 'vuex';

Vue.use(Vuex)
Vue.use(iView);
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router,
    render: app => app(App)
});