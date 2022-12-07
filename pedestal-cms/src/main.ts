import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { loadApps } from './qiankun';
import store from './store';
import 'ant-design-vue/dist/antd.variable.min.css';
import '@/assets/css/global.less';

const app = createApp(App);

app.use(store);
app.use(router);

loadApps();

app.mount('#app');

