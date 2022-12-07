<template>
	<div> Vite + Vue3 + Vue-router Home </div>
	<div>
		<button v-if="qiankunWindow.__POWERED_BY_QIANKUN__" @click="openNewTab"
			>单独打开</button
		>
	</div>
</template>
<script setup lang="ts">
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

const openNewTab = () =>
	window.open(import.meta.env.VITE_APP_NEW_WINDOW + 'home');
</script>
<style lang="less" scoped></style>
