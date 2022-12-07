import { defineStore } from 'pinia';
import { CommonStore } from './types';

export const state: CommonStore = {
	isPedestalRoute: false,
	isLoadRoute: false,
	application: '',
	path: '',
	currentTab: '',
	tabPaneList: [],
	theme: 'light',
	layout: 'sideMenu',
	themeColor: 'rgb(19, 194, 194)',
	navMode: 'inline',
	TheHeaderUserDrawerRef: null,
};

export const useCommonStore = defineStore(
	`${import.meta.env.VITE_SERVICE_NAME}_common`,
	{
		state: () => state,
		getters: {},
		actions: {
			setState(payload: any) {
				Object.assign(this, payload);
			},
		},
	},
);
