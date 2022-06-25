import { createRouter, createWebHashHistory } from 'vue-router';
const HelloWorld = () => import('@/components/HelloWorld.vue');
const zyj = () => import('@/components/zyj.vue')
const routes = [
    {
        path: '/',
        component: zyj
    },
    {
        path: '/home',
        component: HelloWorld,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
});
export default router;
