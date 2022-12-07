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
	selectedRowKeys?: string | number[];
	type?: string;
	checkStrictly?: boolean;
	columnTitle?: string;
	columnWidth?: string | number;
	fixed?: boolean;
	getCheckboxProps?: (record) => void;
	hideDefaultSelections?: boolean;
	hideSelectAll?: boolean;
	preserveSelectedRowKeys?: boolean;
	onSelect?: (record: any, selected: boolean, selectedRows: any[]) => void;
	onChange?: (selectedRowKeys: number[]) => void;
}
