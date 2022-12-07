/* eslint-disable no-unused-vars */
/// <reference types="vite/client" />

declare module '*.vue' {
	import { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.json';

declare module '@ant-design/icons-vue';
declare module 'qiankun';

interface AnyObject {
	[key: string]: any;
}

interface BaseKeyValueIO {
	id?: number | string;
	value?: number | string;
	label?: string;
	text?: string;
}

interface PaginationIO {
	pageNum: number; // 页数
	pageSize: number; // 行数
}

interface SelectionsIO {
	selectedRowKeys: string | number[];
	onChange: (selectedRowKeys: number[]) => void;
}
