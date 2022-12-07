<template>
	<Drawer title="个性化设置" :width="320" :visible="visible" @close="onClose">
		<Space direction="vertical">
			<TypographyTitle :level="5">整体风格设置</TypographyTitle>
			<Space>
				<TheHeaderUserDrawerLayoutIcon
					v-for="item in themeSetting"
					:key="item"
					:mode="item"
					:is-active="theme === item"
					@click="updateCommonState('theme', item)"
				/>
			</Space>
			<Divider />
			<TypographyTitle :level="5">主题色</TypographyTitle>
			<Space>
				<TheHeaderUserDrawerThemeColor
					v-for="item in themeColorSetting"
					:key="item"
					:color="item"
					:is-active="themeColor === item"
					@click="updateCommonState('themeColor', item)"
				/>
			</Space>
			<Divider />
			<TypographyTitle :level="5">导航模式</TypographyTitle>
			<Space :size="16" direction="vertical">
				<Space>
					<TheHeaderUserDrawerLayoutIcon
						v-for="item in layoutSetting"
						:key="item"
						:mode="item"
						:is-active="layout === item"
						@click="updateCommonState('layout', item)"
					/>
				</Space>
				<Space v-if="layout === 'sideMenu'">
					<RadioGroup
						:value="navMode"
						button-style="solid"
						@change="(e: any) => updateCommonState('navMode', e?.target?.value || 'inline')"
					>
						<RadioButton
							v-for="team in navModeSetting"
							:key="team.id"
							:value="team.id"
						>
							{{ team.text }}
						</RadioButton>
					</RadioGroup>
				</Space>
			</Space>
			<Divider />
		</Space>
	</Drawer>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue';
import { ref } from 'vue';
import {
	Space,
	TypographyTitle,
	RadioGroup,
	RadioButton,
	Divider,
	Drawer,
} from 'ant-design-vue';
import TheHeaderUserDrawerLayoutIcon from './TheHeaderUserDrawerLayoutIcon.vue';
import TheHeaderUserDrawerThemeColor from './TheHeaderUserDrawerThemeColor.vue';
import { useCommonStore } from '@/store';

const commonStore = useCommonStore();
const visible = ref<boolean>(false);

const onOpen = () => (visible.value = true);

const onClose = () => (visible.value = false);

// 风格
const theme = computed<string>(() => commonStore.theme);
const themeSetting: string[] = ['light', 'dark'];

// 导航
const layout = computed<string>(() => commonStore.layout);
const layoutSetting: string[] = ['sideMenu', 'topMenu'];

// 导航模式
const navMode = computed<string>(() => commonStore.navMode);
const navModeSetting: BaseKeyValueIO[] = [
	{ id: 'inline', text: '内嵌模式' },
	{ id: 'vertical', text: '垂直模式' },
	// { id: '', text: '混用模式' }
];

// 颜色
const themeColor = computed<string>(() => commonStore.themeColor);
const themeColorSetting: string[] = [
	'rgb(24, 144, 255)',
	'rgb(245, 34, 45)',
	'rgb(250, 84, 28)',
	'rgb(250, 173, 20)',
	'rgb(19, 194, 194)',
	'rgb(82, 196, 26)',
	'rgb(47, 84, 235)',
	'rgb(114, 46, 209)',
];

// 更新 Common 状态
const updateCommonState = (key: string, value: string) =>
	commonStore.setState({ [key]: value });

defineExpose({
	onOpen,
	onClose,
});
</script>
