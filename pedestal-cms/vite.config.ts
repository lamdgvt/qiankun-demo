import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteCompression from 'vite-plugin-compression';
import type { ConfigEnv } from 'vite';
import { resolve } from 'path';
import { changePackageVersion } from './build/plugins';

export default ({ mode }: ConfigEnv) => {
	const root = process.cwd();
	const env = loadEnv(mode, `${root}\\env`);
	const Port = env.VITE_APP_PUBLIC_PORT;
    
	const alias = {
		'@': resolve(__dirname, 'src'),
	};

	const proxy = {};

	return defineConfig({
		base: env.VITE_APP_PUBLIC_PATH,
		envDir: './env',
		plugins: [
			vue({ reactivityTransform: [/src/] }),
			vueJsx(),
			viteCompression({
				ext: '.gz',
				deleteOriginFile: false,
			}),
			changePackageVersion(),
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
			sourcemap: process.env.NODE_ENV !== 'production',
			manifest: true,
		},
	});
};
