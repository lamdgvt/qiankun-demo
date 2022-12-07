<template>
	<config-provider :input="{ autocomplete: 'off' }">
		<router-view />
	</config-provider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import useQiankun from '@/hooks/useQiankun';

useQiankun();
</script>

<style lang="less" scoped></style>
