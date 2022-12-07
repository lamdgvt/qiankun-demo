<template>
    <Tooltip placement="top">
        <template #title>
            <span>{{ modeSpan }}</span>
        </template>
        <div class="layout-icon">
            <img :src="imgSrc">
            <check-circle-filled v-if="active" class="active-icon" />
        </div>
    </Tooltip>

</template>

<script lang="ts" setup>
import Light from '@/assets/img/components/Light.svg'
import Dark from '@/assets/img/components/Dark.svg'
import RealDark from '@/assets/img/components/RealDark.svg'
import SideMenu from '@/assets/img/components/SideMenu.svg'
import TopMenu from '@/assets/img/components/TopMenu.svg'
import { computed } from 'vue';
import { CheckCircleFilled } from '@ant-design/icons-vue';
import { Tooltip } from 'ant-design-vue'

const props = withDefaults(defineProps<{ mode?: string; isActive: boolean }>(), {
    mode: 'light',
    isActive: false
})

const active = computed<boolean>(() => props.isActive)

const imgSrc = computed<string>(() => {
    switch (props.mode) {
        case 'light': return Light

        case 'dark': return Dark

        case 'realDark': return RealDark;

        case 'sideMenu': return SideMenu;

        case 'topMenu': return TopMenu;
    }

    return Light
})

const modeSpan = computed<string>(() => {
    switch (props.mode) {
        case 'light': return '亮色风格'

        case 'dark': return '暗色风格'

        case 'realDark': return '暗黑模式';

        case 'sideMenu': return '侧边菜单布局';

        case 'topMenu': return '顶部菜单布局';
    }

    return ''
})

</script>

<style lang="less" scoped>
@import '@/assets/theme/antd.less';

.layout-icon {
    position: relative;
    cursor: pointer;

    .active-icon {
        position: absolute;
        right: 6px;
        bottom: 6px;
        color: @primary-color;
    }
}
</style>