import { useUserStore, useCommonStore, useHeadersStore } from '@/store';
import { computed, watch } from 'vue';
import { initGlobalState } from 'qiankun';
import { useRoute } from 'vue-router';
import { ConfigProvider } from 'ant-design-vue';

export default function useQiankun() {
	const route = useRoute();
	const userStore = useUserStore();
	const headersStore = useHeadersStore();
	const commonStore = useCommonStore();

	const globalConfig = computed<any>(() => ({
		userStore,
		commonStore,
	}));

	const actions = initGlobalState(globalConfig.value);

	// 更新 全局状态
	const setGlobalValues = (params: any) => {
		actions.setGlobalState({
			...globalConfig.value,
			...params,
		});
	};

	// 以模块维度 更新全局状态
	const setGlobalValuesByModule = (module: string, params: any) => {
		const value = { ...globalConfig.value[module], ...params };

		actions.setGlobalState({
			...globalConfig.value,
			...value,
		});
	};

	// 监听 store 变化 实时更新到 qiankun Global
	watch(
		() => [userStore, headersStore, commonStore],
		([userStore, headersStore, commonStore]) => {
			setGlobalValues({
				userStore,
				headersStore,
				commonStore,
			});
		},
		{
			immediate: true,
			deep: true,
		},
	);

	watch(
		() => route,
		val => {
			const { path: pathVal } = val;

			const [, application, path] = pathVal.split('/');

			commonStore.setState({
				application,
				path,
			});
		},
		{
			deep: true,
			immediate: true,
		},
	);

	// 切换主题颜色
	watch(
		() => commonStore.themeColor,
		(primaryColor: string) => {
			ConfigProvider.config({
				theme: {
					primaryColor,
				},
			});
		},
		{ immediate: true },
	);

	return {
		globalConfig,
		setGlobalValues,
		setGlobalValuesByModule,
	};
}
