<template>
    <div class="theme-color-layout" :style="{ backgroundColor }">
        <check-outlined v-if="active" class="theme-color-icon" />
    </div>
</template>

<script lang="ts" setup>
import { CheckOutlined } from '@ant-design/icons-vue';
import { computed } from 'vue';

const props = withDefaults(defineProps<{ color: string; isActive: boolean }>(), {
    color: '',
    isActive: false,
})

const active = computed<boolean>(() => props.isActive)

const backgroundColor = computed<string>(() => props.color)

</script>
<style lang="less" scoped>
.theme-color-layout {
    color: #fff;
    text-align: center;
    border-radius: 2px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: relative;

    .theme-color-icon {
        display: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
}
</style>