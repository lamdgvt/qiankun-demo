<template>
    <a-card :style="{ width: '100wh', height: '100vh' }">
        <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
            <template #extra>
                <a-button type="primary" @click="router.push({ path: '/' })">Back Home</a-button>
            </template>
        </a-result>
    </a-card>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<style lang="less" scoped>
</style>
