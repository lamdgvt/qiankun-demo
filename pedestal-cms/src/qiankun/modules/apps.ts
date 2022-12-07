const apps = [
	{
		name: 'vue3',
		entry: 'http://vue3-beta.pigsycloud.com/vue3',
		container: '#subAppContainer',
		activeRule: `${import.meta.env.VITE_APP_PUBLIC_PATH}vue3`,
	},
];

export default apps;
