<template>
	<SubMenu
		v-for="(team) in menuList.filter((list: any)=> list.menuVisible)"
		:key="team.id"
	>
		<template #title>
			<span>
				<component :is="Icons[team.menuIcon]" />
				<span>{{ team.menuName }}</span>
			</span>
		</template>
		<menu-item
			v-for="(item) in team.menuInfoList.filter((list: any)=> list.menuVisible)"
			:key="item.id"
			@click="() => menuItemClick(item)"
		>
			<TheHeaderMenuItem v-if="item.menuInfoList" />
			<span>
				<component :is="Icons[item.menuIcon]" />
				<span :style="{ marginLeft: '10px' }">
					{{ item.menuName }}
				</span>
			</span>
		</menu-item>
	</SubMenu>
</template>

<script lang="ts" setup>
import * as Icons from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { SubMenu, MenuItem } from 'ant-design-vue';

const router = useRouter();

withDefaults(defineProps<{ menuList?: any[] }>(), {
	menuList: () => [],
});

const menuItemClick = (item: AnyObject) =>
	router.push({ path: `/${item.modulePath}/${item.menuPath}` });
</script>
