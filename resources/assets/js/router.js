// import Index from './components/index/Index.vue'

const routes = [
    {
        path: '/admin/index',
        component: () => import('./components/index/Index.vue')
    }
];

export default routes;