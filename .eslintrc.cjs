// eslint-disable-next-line no-undef
module.exports = {
	env: {
		'browser': true,
		'es2021': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	parser: '@typescript-eslint/parser',
	plugins: [ '@typescript-eslint', ],
	root: true,
	rules: {
		quotes: [ 'error', 'single', ],
		semi: [ 'error', 'never', ],
		camelcase: [ 'error', { properties: 'always', }, ],
		complexity: [ 'error', 10, ],
		curly: [ 'error', 'multi-line', ],
		eqeqeq: 'error',
		'capitalized-comments': [ 'error', ],
		'consistent-return': 'error',
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'dot-notation': 'error',
		'func-name-matching': 'error',
		'func-style': [ 'error', 'expression', ],
		'no-console': 'error',
		'no-debugger': 'error',
		'no-empty': 'error',
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': [ 'off', ],
		'no-extra-parens': 'error',
		'max-classes-per-file': [ 'error', 1, ],
		'multiline-comment-style': [ 'error', 'starred-block', ],
		'no-alert': 'error',
		'no-else-return': 'error',

		// Styling
		'array-bracket-newline': [ 'error', 'consistent', ],
		'array-bracket-spacing': [ 'error', 'always', ],
		'array-element-newline': [ 'error', 'consistent', ],
		'arrow-parens': [ 'error', 'always', ],
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'brace-style': 'error',
		'comma-dangle': [ 'error', 'always', ],
		'comma-spacing': [ 'error', { before: false, after: true, }, ],
		'comma-style': [ 'error', 'last', ],
		'computed-property-spacing': [ 'error', 'never', ],
		'eol-last': [ 'error', 'always', ],
		'func-call-spacing': [ 'error', 'never', ],
		'function-call-argument-newline': [ 'error', 'consistent', ],
		'implicit-arrow-linebreak': [ 'error', 'beside', ],
		indent: [ 'error', 'tab', ],
		'jsx-quotes': [ 'error', 'prefer-single', ],
		'key-spacing': [ 'error', { beforeColon: false, afterColon: true, }, ],
		'keyword-spacing': [ 'error', { before: true, after: true, }, ],
		// 'line-break-style': [ 'error', 'unix', ],
		'max-len': [ 'error', {
			code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true,
		}, ],
		'max-lines': [ 'error', {
			max: 300, skipBlankLines: true, skipComments: true,
		}, ],
		'no-multi-spaces': 'error',
		'no-trailing-spaces': 'error',
		'no-unused-expressions': 'error',
		'no-multiple-empty-lines': [ 'error', { max: 1, }, ],
		'no-whitespace-before-property': 'error',
		// 'nonblock-statement-body-position': [ 'error', 'besides', ],
		'object-curly-newline': [ 'error', { minProperties: 3, consistent: true, }, ],
		'object-curly-spacing': [ 'error', 'always', ],
		'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true, }, ],
		'operator-linebreak': [ 'error', 'after', ],
		'padded-blocks': [ 'error', 'never', ],
		'space-before-function-paren': [ 'error', {
			anonymous: 'always', named: 'never', asyncArrow: 'always',
		}, ],
		'space-before-blocks': [ 'error', 'always', ],
		'space-in-parens': [ 'error', 'never', ],
		'space-unary-ops': [ 'error', { words: true, nonwords: false, }, ],
		// 'switch-colon-space': [ 'error', { after: true, before: false, }, ],
		'template-curly-spacing': 'error',
	},
}