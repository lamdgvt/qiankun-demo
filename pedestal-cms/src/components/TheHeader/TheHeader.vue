<template>
	<Layout class="layout-container">
		<layout-sider
			v-if="layout === 'sideMenu'"
			v-model:collapsed="collapsed"
			:theme="theme"
			:class="[
				'layout-sider',
				theme === 'dark' ? 'layout-sider-dark' : '',
			]"
			:trigger="null"
			collapsible
		>
			<TheHeaderLogoMenu :collapsed="collapsed" :mode="navMode" />
		</layout-sider>

		<Layout>
			<layout-header
				:theme="theme"
				:class="[
					'layout-header',
					theme === 'dark' ? 'layout-header-dark' : '',
				]"
			>
				<template v-if="layout === 'sideMenu'">
					<menu-unfold-outlined
						v-if="collapsed"
						@click="() => (collapsed = !collapsed)"
					/>
					<menu-fold-outlined
						v-else
						@click="() => (collapsed = !collapsed)"
					/>
				</template>
				<TheHeaderLogoMenu v-else-if="layout === 'topMenu'" />
				<TheHeaderUser />
			</layout-header>
			<!-- 不可重新渲染 导致重新请求 -->
			<layout-content>
				<TheHeaderContent />
			</layout-content>
		</Layout>
	</Layout>
</template>

<script setup lang="ts">
import TheHeaderContent from './TheHeaderContent.vue';
import TheHeaderLogoMenu from './TheHeaderLogoMenu.vue';
import TheHeaderUser from './TheHeaderUser.vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import {
	Layout,
	LayoutSider,
	LayoutHeader,
	LayoutContent,
	MenuMode,
} from 'ant-design-vue';
import { computed, ref } from 'vue';
import { useCommonStore } from '@/store';

const commonStore = useCommonStore();
const layout = computed<string>(() => commonStore.layout);
const collapsed = ref<boolean>(false);
const theme = computed<any>(() => commonStore.theme);
const navMode = computed<MenuMode>(() => commonStore.navMode);
</script>

<style lang="less" scoped>
.layout-container {
	height: 100vh;
	overflow: hidden;
}

.layout-sider {
	:deep(.ant-layout-sider-children) {
		display: flex;
		flex-direction: column;
	}
}

:deep(.ant-layout) {
	height: 100%;
}

.layout-sider-dark {
	color: #fff;
}

.layout-header {
	padding-left: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	background-color: #fff;
	border-bottom: 1px solid #f0f0f0;
	transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;

	> span.anticon {
		font-size: 18px;
	}
}

.layout-header-dark {
	background-color: #001529;
	border-bottom: 1px solid #001529;
	color: #fff;
}
</style>
