import { registerMicroApps, start } from 'qiankun';
import { FrameworkConfiguration } from 'qiankun/es/interfaces.d';
import { useCommonStore } from '@/store';

const config: FrameworkConfiguration = {
	prefetch: 'all',
	sandbox: {
		// experimentalStyleIsolation: true, // 严格的样式隔离模式 css 样式会增加项目前缀
	},
	singular: true, // 单实例应用场景
};

const context = import.meta.globEager(`./modules/*.ts`);
let modulesRoutes: any = {};

for (let key in context) {
	const [, , env] = key.split('/');

	modulesRoutes[env] = context[key].default;
}

const loadApps = async () => {
	const env = import.meta.env.VITE_NODE_ENV;
	const commonStore = useCommonStore();

	let data;

	switch (env) {
		case 'development':
			data = modulesRoutes['apps.dev.ts'];
			break;

		case 'staging':
			data = modulesRoutes['apps.stag.ts'];
			break;

		default:
			data = modulesRoutes['apps.ts'];
	}

	registerMicroApps(data, {
		beforeLoad() {
			commonStore.setState({ isLoadingSubApplication: true });
		},
		afterMount() {
			commonStore.setState({ isLoadingSubApplication: false });
		},
	});

	start(config);

	return data;
};

export { loadApps };
