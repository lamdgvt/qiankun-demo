export interface CommonStore {
	isPedestalRoute: boolean; // 是否属于底座路由
	isLoadRoute: boolean; // 是否已加载完路由模块
	application: string; // 微应用注册路由
	path: string; // 路由路径
	currentTab: string; // 当前选中的 tab
	tabPaneList: any[]; // tab 页签队列
	theme: string; // 'light', 'dark'
	layout: string; // 'sideMenu', 'topMenu'
	themeColor: string; // 当前主题颜色
	navMode: string; // 导航模式,
	TheHeaderUserDrawerRef: any; //
}
