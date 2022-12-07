<template>
	<div class="logo" @click="() => router.push({})">
		<Space>
			<img src="@/assets/logo.png" alt="logo" />
			<span v-if="!collapsed"> 底座 </span>
		</Space>
	</div>
	<Menu
		v-model:selectedKeys="selectedKeys"
		:theme="theme"
		class="layout-menu"
		:style="menuStyle"
		:mode="mode"
	>
		<TheHeaderMenuItem :menu-list="menuList" />
	</Menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import TheHeaderMenuItem from './TheHeaderMenuItem.vue';
import { Space, Menu, MenuMode } from 'ant-design-vue';
import { useCommonStore, useUserStore } from '@/store';

const userStore = useUserStore();
const commonStore = useCommonStore();
const router = useRouter();
const props = withDefaults(
	defineProps<{
		collapsed?: boolean;
		mode?: MenuMode;
	}>(),
	{
		collapsed: false,
		mode: 'horizontal',
	},
);

const theme = computed<any>(() => commonStore.theme);
const currentTab = computed<string>(() => commonStore.currentTab);

const selectedKeys = computed<string[]>({
	get: () => [currentTab.value],
	set() {},
});

const menuStyle = computed(() =>
	props.mode === 'horizontal'
		? {}
		: {
				'overflow-y': 'auto',
				'overflow-x': 'hidden',
		  },
);

const menuList = computed(() => userStore.menuInfoVoList || []);
</script>

<style lang="less" scoped>
.layout-menu {
	flex: 1;
	border-bottom: none;
}

.logo {
	box-sizing: border-box;
	padding: 15px 25px;
	height: 62px;
	line-height: 32px;
	cursor: pointer;
	display: flex;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	img {
		width: 32px;
	}

	span {
		font-size: 15px;
	}
}
</style>
