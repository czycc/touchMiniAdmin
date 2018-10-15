// import Index from './components/index/Index.vue'

const routes = [
    {
        path: '/admin/index',
        component: () => import('./components/index/Index.vue')
    }, {
        path: '/admin/category/videos',
        component: () => import('./components/category/Videos.vue')
    }, {
        path: '/admin/tags',
        component: () => import('./components/tag/Tag.vue')
    }
];

export default routes;