import { createPinia } from 'pinia';
import piniaPersistedstate from 'pinia-plugin-persistedstate';
import { useUserStore } from './modules/user';
import { useHeadersStore } from './modules/headers';
import { useCommonStore } from './modules/common';

const pinia = createPinia();
pinia.use(piniaPersistedstate);

export { useUserStore, useHeadersStore, useCommonStore };
export default pinia;
