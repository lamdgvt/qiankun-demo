import { defineStore } from 'pinia';
import { CommonStore } from './types';
import router from '@/router';

const state: CommonStore = {
	isLoadingSubApplication: false,
	isPedestalRoute: true,
	application: '',
	path: '',
	currentTab: '',
	tabPaneList: [],
	theme: 'light',
	layout: 'sideMenu',
	themeColor: 'rgb(19, 194, 194)',
	navMode: 'inline',
};

export const useCommonStore = defineStore('common', {
	persist: {
		paths: ['layout', 'theme', 'themeColor', 'navMode'],
	},
	state: () => state,
	getters: {},
	actions: {
		setState(payload: any) {
			Object.assign(this, payload);
		},
		addTabPaneList(payload: any) {
			const { id } = payload;

			const isExist = this.tabPaneList.find(item => item.id === id);

			!isExist && this.tabPaneList.push(payload);
		},
		updateCurrentTab(currentTab: string) {
			this.currentTab = currentTab;
		},
		deleteTab(tabId: string) {
			const params = {
				tabPaneList: this.tabPaneList.filter(item => item.id !== tabId),
			};

			if (tabId === this.currentTab) {
				const item = params.tabPaneList.at(-1);

				if (item) {
					this.currentTab = item.id;
					router.push({ path: item.path });
				} else router.push({ path: '/home' });
			}

			Object.assign(this, params);
		},
	},
});
