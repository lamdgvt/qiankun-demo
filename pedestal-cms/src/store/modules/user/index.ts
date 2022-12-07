import { defineStore } from 'pinia';
import { UserStore } from './types';
import { cloneDeep } from 'lodash';

const state: UserStore = {
	isDoneRequest: false,
	adminName: '',
	type: 0,
	email: '',
	gender: 0,
	headPath: '',
	phone: '',
	menuInfoVoList: [
		{
			id: 'vue3',
			menuVisible: 1,
			menuName: 'vue3',
			modulePath: 'vue3',
			menuPath: 'home',
		},
	],
	btnPermList: [],
	userId: 0,
};

export const useUserStore = defineStore('user', {
	state: () => ({
		...cloneDeep(state),
	}),
	getters: {},
	actions: {
		setState(params: UserStore) {
			Object.assign(this, params);
		},
		clearState() {
			Object.assign(this, cloneDeep(state));
		},
	},
});
