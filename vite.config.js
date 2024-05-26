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
				find: '~/api',
				replacement: resolve(__dirname, 'src/api')
			},
			{
				find: '~/common',
				replacement: resolve(__dirname, 'src/common')
			},
			{
				find: '~/components',
				replacement: resolve(__dirname, 'src/components')
			},
			{
				find: '~/constants',
				replacement: resolve(__dirname, 'src/constants')
			},
			{
				find: '~/helpers',
				replacement: resolve(__dirname, 'src/helpers')
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
			},
			{
				find: '~/utils',
				replacement: resolve(__dirname, 'src/utils')
			}
		]
	},

	plugins: [react(), macros()]
})

export default viteConfig
