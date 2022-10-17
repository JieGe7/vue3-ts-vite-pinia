import { createRouter, createWebHashHistory } from 'vue-router';
const threeJS = () => import('@/page/threeJS.vue');
const zyj = () => import('@/components/zyj.vue')
const routes = [
    {
        path: '/',
        component: zyj
    },
    {
        path: '/threeJS',
        component: threeJS,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});
export default router;
