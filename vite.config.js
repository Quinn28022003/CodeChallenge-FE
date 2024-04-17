import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import macros from 'vite-plugin-babel-macros'

const viteConfig = defineConfig({
	resolve: {
		alias: [
			{
				find: '~/App',
				replacement: resolve(__dirname, 'src/App')
			},
			{
				find: '~/routes',
				replacement: resolve(__dirname, 'src/routes')
			},
			{
				find: '~/components',
				replacement: resolve(__dirname, 'src/components')
			},
			{
				find: '~/hook',
				replacement: resolve(__dirname, 'src/hook')
			},
			{
				find: '~/layouts',
				replacement: resolve(__dirname, 'src/layouts')
			},
			{
				find: '~/pages',
				replacement: resolve(__dirname, 'src/pages')
			},
			{
				find: '~/store',
				replacement: resolve(__dirname, 'src/store')
			},
			{
				find: '~/styles',
				replacement: resolve(__dirname, 'src/styles')
			},
			{
				find: '~/theme',
				replacement: resolve(__dirname, 'src/theme')
			}
		]
	},

	plugins: [react(), macros()]
})

export default viteConfig
