// import legacy from '@vitejs/plugin-legacy';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import viteCompression from 'vite-plugin-compression';
import vueJsx from '@vitejs/plugin-vue-jsx';
import qiankun from 'vite-plugin-qiankun';
import type { ConfigEnv } from 'vite';
import { resolve } from 'path';
import { changePackageVersion } from './build/plugins';

export default ({ mode }: ConfigEnv) => {
	const root = process.cwd();
	const env = loadEnv(mode, root);

	const Port = env.VITE_APP_PUBLIC_PORT;
	const Url = env.VITE_APP_PUBLIC_URL;
	const serviceName = env.VITE_SERVICE_NAME;

	const alias = {
		'@': resolve(__dirname, 'src'),
	};

	const proxy = {};

	return defineConfig({
		base: Url,
		plugins: [
			vue({ reactivityTransform: [/src/] }),
			vueJsx(),
			changePackageVersion(),
			// legacy({
			// 	targets: ['defaults', 'not IE 11'],
			// }),
			createHtmlPlugin({
				minify: true,
				template: 'index.html',
			}),
			viteCompression(),
			qiankun(serviceName, {
				useDevMode: true,
			}),
		],
		resolve: {
			alias,
		},
		server: {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			host: process.env.NODE_ENV !== 'production',
			port: Number(Port),
			proxy,
		},
		css: {
			devSourcemap: true,
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
				},
			},
		},
		build: {
			// 启用 css 代码 拆分
			cssCodeSplit: true,
			sourcemap: 'inline',
			manifest: true,
		},
	});
};
