import { reactive, watch } from 'vue';
import { QiankunProps, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { router } from '@/router/index';
import { useCommonStore, useUserStore, useHeadersStore } from '@/store';
import * as user from '@/store/modules/user';
import * as headers from '@/store/modules/headers';
import * as common from '@/store/modules/common';

export default function useQiankun(props: QiankunProps) {
	const globalValues = reactive<any>({});
	const userStore = useUserStore();
	const headersStore = useHeadersStore();
	const commonStore = useCommonStore();

	props.onGlobalStateChange((state: any, prev: any) => {
		// state: 变更后的状态; prev 变更前的状态
		Object.assign(globalValues, state);

		const userStateParams = (() => {
			const { state: userState } = user;
			const params: any = {};
			for (const key in userState)
				params[key] = globalValues.userStore[key];

			return params;
		})();

		const headersStateParams = (() => {
			const { state: headersState } = headers;
			const params: any = {};

			for (const key in headersState)
				params[key] = globalValues.headersStore[key];

			return params;
		})();

		const commonStateParams = (() => {
			const { state: commonState } = common;
			const params: any = {};
			for (const key in commonState)
				params[key] = globalValues.commonStore[key];

			return params;
		})();

		userStore.setState(userStateParams || {});
		headersStore.setState(headersStateParams || {});
		commonStore.setState(commonStateParams || {});
	}, true);

	if (qiankunWindow.__POWERED_BY_QIANKUN__) {
		watch(
			() => commonStore,
			(val: any) => {
				const { application, path } = val;

				if (application === import.meta.env.VITE_SERVICE_NAME && path)
					router.push({
						path,
					});
			},
			{
				deep: true,
				immediate: true,
			},
		);
	}

	return {
		globalValues,
	};
}
