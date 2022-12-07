import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ExtraRoutes from './ExtraRoutes';
import TheHeader from '@/components/TheHeader/TheHeader.vue';

const routes: RouteRecordRaw[] = [
	// 无需 header 模块路由
	...ExtraRoutes,
	{
		path: '/:pathMatch(.*)*',
		component: TheHeader,
		children: [],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH || '/'),
	routes,
});

export default router;
