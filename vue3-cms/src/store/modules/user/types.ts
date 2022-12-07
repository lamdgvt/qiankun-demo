export interface menuInfoVoTeam {}

export interface UserStore {
	isDoneRequest?: boolean;
	userId?: number; // 用户 id
	adminName?: string; // 用户名
	type?: number; // 账号类型   1'公司内部用户', 2'客户', 3'其他'
	email?: string; // email
	gender?: number; // 性别
	headPath?: string; // 头像地址
	phone?: string; // 联系电话
	menuInfoVoList?: menuInfoVoTeam[];
	btnPermList?: string[];
}
