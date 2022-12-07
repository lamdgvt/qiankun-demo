<template>
	<div :style="{ position: 'relative' }">
		<TheHeaderTabs />
		<div
			v-if="commonStore.isLoadingSubApplication"
			class="sub-application-loading"
		>
			<div class="sub-application-loading-box">
				<img src="@/assets/sub-application-loading.gif" alt="" />
				<span>正在加载 请稍候...</span>
			</div>
		</div>
		<LayoutContent id="subAppContainer" class="layout-content" />
		<!-- <router-view id="pedestal-container" class="layout-content" /> -->
	</div>
</template>

<script lang="ts" setup>
import TheHeaderTabs from './TheHeaderTabs.vue';
import { LayoutContent } from 'ant-design-vue';
import { useCommonStore } from '@/store';

const commonStore = useCommonStore();
</script>

<style lang="less" scoped>
.layout-content {
	height: calc(100vh - 64px - 50px);
	box-sizing: border-box;
	padding: 15px;
	overflow-y: auto;
	overflow-x: hidden;
}

.sub-application-loading {
	position: absolute;
	z-index: 1000;
	width: 100%;
	height: 100%;
	padding: 15px;
	box-sizing: border-box;
	background-color: rgba(240, 242, 245, 0.65);
	display: flex;
	align-items: center;
	justify-content: center;

	&-box {
		width: 300px;
		height: 174px;
		border-radius: 3px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		img {
			margin-bottom: 10px;
		}
	}
}
</style>
