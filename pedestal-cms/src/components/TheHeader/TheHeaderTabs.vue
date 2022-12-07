<template>
	<Tabs
		v-model:activeKey="currentTab"
		class="layout-tabs-row"
		hide-add
		type="editable-card"
		@tab-click="skipPage"
		@edit="deleteTab"
	>
		<TabPane v-for="item in tabPaneList" :key="item.id" :tab="item.name" />
	</Tabs>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCommonStore } from '@/store';
import { Tabs, TabPane } from 'ant-design-vue';
import { Key } from 'ant-design-vue/es/table/interface';

const commonStore = useCommonStore();
const router = useRouter();
const tabPaneList = computed<any[]>(() => commonStore.tabPaneList || []);
const currentTab = computed<string>(() => commonStore.currentTab || '');

// 跳转页面
const skipPage = (id: Key) => {
	const team: any = tabPaneList.value.find(item => item.id === id);
	commonStore.updateCurrentTab(team.id);
	router.push({
		path: team.path,
	});
};

// 删除页签
const deleteTab = (
	id: Key | KeyboardEvent | MouseEvent,
	action: 'add' | 'remove',
) => {
	switch (action) {
		case 'remove':
			commonStore.deleteTab(String(id));
			break;

		default:
			return;
	}
};
</script>

<style lang="less" scoped>
.layout-tabs-row {
	background: #fff;
	padding: 10px 15px 0;
	min-height: 50px;
	box-sizing: border-box;

	:deep(.ant-tabs-nav::before) {
		display: none;
	}

	:deep(.ant-tabs-nav) {
		margin-bottom: 0;
	}
}
</style>
