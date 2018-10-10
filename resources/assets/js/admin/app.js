require('../bootstrap');

window.Vue = require('vue')
import VueRouter from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.use(VueRouter);

const routes = [
    {
        path: '/admin',
        component: () => import('./main.vue'),
        children: [

        ]
    }
];

const router = new VueRouter({
    routes
});

new Vue(
    {
        router,
    }
).$mount('#app')
