import { defineConfig } from 'vite'

export default defineConfig({
	base: '/positivus/',
	root: './src',
	build: {
		outDir: '../dist',
	},
	publicDir: '../public',
})
