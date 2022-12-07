module.exports = {
	env: {
		es6: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/first-attribute-linebreak': 'off',
		'vue/no-unused-vars': 'off',
	},
	globals: {
		AnyObject: 'readonly',
		PaginationIO: 'readonly',
		SelectionsIO: 'readonly',
		BaseKeyValueIO: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
};
