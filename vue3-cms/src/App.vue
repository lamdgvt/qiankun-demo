<template>
	<a-config-provider :input="{ autocomplete: 'off' }">
		<router-view v-slot="{ Component }">
			<template v-if="isDev">
				<component :is="Component" />
			</template>
			<keep-alive v-else>
				<component :is="Component" />
			</keep-alive>
		</router-view>
	</a-config-provider>
</template>

<script setup lang="ts">
const isDev = import.meta.env.NODE_ENV;

// :transform-cell-text="transformCellTextRender"

// 表格单元格 统一设置, 空数据 默认值 为 '-'
// const transformCellTextRender = ({ text, column, record, }: any) => (text?.type?.name || text?.length || record[column?.key]) ? text : '-';
</script>
