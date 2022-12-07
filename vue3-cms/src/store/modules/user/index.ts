import { defineStore } from 'pinia';
import { UserStore } from './types';
import { cloneDeep } from 'lodash';

export const state: UserStore = {
	isDoneRequest: false,
	adminName: '',
	type: 0,
	email: '',
	gender: 0,
	headPath: '',
	phone: '',
	menuInfoVoList: [],
	btnPermList: [],
	userId: 0,
};

export const useUserStore = defineStore(
	`${import.meta.env.VITE_SERVICE_NAME}_user`,
	{
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
	},
);
