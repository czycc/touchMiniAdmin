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
    }, {
        path: '/admin/videos',
        component: () => import('./components/video/Video.vue')
    }, {
        path: '/admin/videos/:id/edit',
        component: () => import('./components/video/Edit.vue')
    }
];

export default routes;