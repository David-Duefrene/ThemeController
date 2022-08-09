import { defineConfig, } from 'vitest/config'

export default defineConfig({
	test: {
		environment: 'jsdom',
	},
	build: {
		lib: {
			entry: './ThemeController.ts',
			name: 'MyLib',
			fileName: 'my-lib',
		},

	},
},)
