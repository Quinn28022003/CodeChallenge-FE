const tailwindConfig = {
	content: [], // ? No content for tailwind css only work in styles.ts file (unified convention)
	theme: {
		/**
		 * ? Define screens follow antd-style lib
		 * ? Link docs: https://ant-design.github.io/antd-style/api/use-responsive
		 */
		screens: {
			xs: '375px', // minWidth: 0
			sm: '576px', // minWidth: 576
			md: '768px', // minWidth: 768
			lg: '992px', // minWidth: 992
			xl: '1200px', // minWidth: 1200
			'2xl': '1600px', // minWidth: 1600

			mobile: '0px',
			tablet: '768px',
			laptop: '1200px',
			desktop: '1600px'
		},
		extend: {
			colors: {
				/**
				 * ? Antd theme colors, define for SeedToken
				 * ? Link docs: https://ant.design/docs/react/customize-theme#seedtoken
				 */
				text: '#272727',
				link: '#32a1c8',
				info: '#40a9ff',
				primary: '#04AA6D',
				success: '#2fce00',
				warning: '#fea800',
				error: '#ff494e',
				subPrimary: 'rgb(240 253 244 / var(--tw-bg-opacity))',
				darkMode: 'rgb(31 41 55 / var(--tw-bg-opacity))'
			}
		}
	},
	plugins: [
		// ? 'max-lg:mb-0 max-lg:mt-0' can be written as 'max-lg:merge-[mb-0, mt-0]'
		({ matchUtilities }) => {
			matchUtilities({
				merge: value => ({
					[`@apply ${value.replaceAll(', ', ' ')}`]: {}
				})
			})
		}
	],
	corePlugins: {
		preflight: false
	}
}

export default tailwindConfig
