import {
	createRouter,
	createWebHistory,
	createMemoryHistory,
	RouteRecordRaw,
	RouterOptions,
} from 'vue-router';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

const routes: RouteRecordRaw[] = [
	// 无需 header 模块路由
	{
		name: 'home',
		path: '/home',
		component: () => import('@/views/home/index.vue'),
	},
	{
		// 404 页面
		path: '/:pathMatch(.*)*',
		component: () => import('@/views/NotFound.vue'),
	},
];

const router = (() => {
	const config: RouterOptions = {
		history: null,
		routes,
	};

	if (qiankunWindow.__POWERED_BY_QIANKUN__)
		config.history = createMemoryHistory(
			import.meta.env.VITE_APP_PUBLIC_PATH || '/',
		);
	else
		config.history = createWebHistory(
			import.meta.env.VITE_APP_PUBLIC_PATH || '/',
		);

	return createRouter(config);
})();

// if (process.env.NODE_ENV !== 'development') {
// 全局路由守卫
router.beforeEach(async (to, from, next) => {
	next();
});
// }

export { router };
