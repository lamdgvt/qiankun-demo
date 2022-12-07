import { defineStore } from 'pinia';
import { HeadersStore } from './types';
import Cookies from 'js-cookie';
import { cloneDeep } from 'lodash';

const state: HeadersStore = {
	token_type: '',
	access_token: '',
	Authorization: '',
};

export const useHeadersStore = defineStore('headers', {
	state: () => ({
		...{
			token_type: Cookies.get('token_type') || '',
			access_token: Cookies.get('access_token') || '',
			Authorization: Cookies.get('Authorization') || '',
		},
	}),
	getters: {},
	actions: {
		setState(params: HeadersStore) {
			Object.assign(this, params);
		},
		clearState() {
			Object.assign(this, cloneDeep(state));
		},
	},
});
