import { MenuMode } from "ant-design-vue";
export interface CommonStore {
	isLoadingSubApplication: boolean; // 是否正在加载 微应用
	isPedestalRoute: boolean; // 是否属于底座路由
	application: string; // 微应用注册路由
	path: string; // 路由路径
	currentTab: string; // 当前选中的 tab
	tabPaneList: any[]; // tab 页签队列
	theme: string; // 'light', 'dark'
	layout: string; // 'sideMenu', 'topMenu'
	themeColor: string; // 当前主题颜色
	navMode: MenuMode; // 导航模式,
}
