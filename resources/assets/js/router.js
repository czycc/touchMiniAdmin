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
    }, {
        path: '/admin/videos/create',
        component: () => import('./components/video/Create.vue')
    }, {
        path: '/admin/about',
        component: () => import('./components/about/About.vue')
    }, {
        path: '/admin/category/articles',
        component: () => import('./components/category/Article.vue')
    }, {
        path: '/admin/articles',
        component: () => import('./components/article/List.vue')
    }, {
        path: '/admin/articles/create',
        component: () => import('./components/article/Create.vue')
    }, {
        path: '/admin/articles/:id/edit',
        component: () => import('./components/article/Edit.vue')
    }
];

export default routes;