<template>
	<div class="toolbar">
		<Dropdown placement="bottomLeft">
			<template #overlay>
				<Menu class="toolbar-menu" @click="menuClick">
					<menu-item key="traitSet">
						<setting-outlined />
						个性化设置
					</menu-item>
				</Menu>
			</template>
			<a>
				<Space>
					<Avatar>
						<template #icon>
							<img
								v-if="userStore.headPath"
								:src="userStore.headPath"
								alt=""
							/>
							<UserOutlined v-else />
						</template>
					</Avatar>
					<span
						class="header-user-admin-name"
						:class="commonStore.theme"
						>{{ userStore.adminName }}</span
					>
				</Space>
			</a>
		</Dropdown>
	</div>
	<!-- 个性化设置 -->
	<TheHeaderTraitDrawer ref="TheHeaderTraitDrawerRef" />
</template>

<script lang="ts" setup>
import { UserOutlined, SettingOutlined } from '@ant-design/icons-vue';
import TheHeaderTraitDrawer from '@/components/TheHeader/TheHeaderTraitDrawer.vue';
import { ref } from 'vue';
import { useUserStore, useCommonStore } from '@/store';
import { Space, Avatar, Menu, MenuItem, Dropdown } from 'ant-design-vue';

const commonStore = useCommonStore();
const userStore = useUserStore();
const TheHeaderTraitDrawerRef = ref();

const menuClick = async ({ key }: any) => {
	switch (key) {
		case 'traitSet':
			TheHeaderTraitDrawerRef?.value?.onOpen();
			break;

		default:
			break;
	}
};
</script>

<style lang="less" scoped>
.toolbar-menu {
	margin-top: 15px;

	:deep(.anticon) {
		margin-right: 8px;
	}
}

.header-user-admin-name {
	&.light {
		color: rgba(0, 0, 0, 0.85);
	}

	&.dark {
		color: rgba(255, 255, 255, 0.65);
	}
}
</style>
