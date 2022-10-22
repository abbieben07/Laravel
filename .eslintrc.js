module.exports = {
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
	parser: 'vue-eslint-parser',
	ignorePatterns: ['**/theme/**'],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaFeatures: {
			legacyDecorators: true,
		},
		ecmaVersion: 'latest',
	},

	env: {
		browser: true,
		node: true,
		es6: true,
		jquery: true
	},

	globals: {
		__static: true,
	},

	plugins: ['vue', 'jquery', '@typescript-eslint'],

	rules: {
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: {
					max: 30,
				},
				multiline: {
					max: 30,
				},
			},
		],
		'vue/html-indent': [
			'error',
			4,
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		'vue/singleline-html-element-content-newline': [
			'error',
			{
				ignoreWhenNoAttributes: true,
				ignoreWhenEmpty: true,
				ignores: ['pre', 'textarea', 'button', 'span', 'a', 'router-link', 'Input', 'Phone', 'Datepicker', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'abbr', 'option', 'mark', 'label', 'Tab', 'Alert'],
			},
		],
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'any',
					normal: 'any',
					component: 'any',
				},
				svg: 'always',
				math: 'always',
			},
		],
		'vue/comment-directive': [
			'error',
			{
				reportUnusedDisableDirectives: false,
			},
		],
		'vue/multiline-html-element-content-newline': 'off',
		'no-unused-vars': 'off' /* [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: false,
				varsIgnorePattern: '^_',
				argsIgnorePattern: '^_',
			},
		], */
	},

	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true,
			},
		},
	],
}