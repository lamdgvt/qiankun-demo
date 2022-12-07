import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index';
import useQiankun from '@/hooks/useQiankun';
import Antd from 'ant-design-vue';
import store from './store';
import {
	renderWithQiankun,
	QiankunProps,
	qiankunWindow,
} from 'vite-plugin-qiankun/dist/helper';
import 'ant-design-vue/dist/antd.variable.min.css';
import '@/assets/css/global.less';

const render = () => {
	const app = createApp(App);

	app.use(store);
	app.use(router);
	app.use(Antd);

	app.mount('#container');
};

renderWithQiankun({
	mount(props) {
		render();
		useQiankun(props);
	},
	bootstrap() {},
	unmount(props: any) {},
	update: function (props: QiankunProps): void | Promise<void> {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) render();
