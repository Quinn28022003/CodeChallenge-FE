import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage, showNav }) => ({
	Navigation: {
		...tw`bg-white w-full h-full block items-start top-[70px] max-w-[1920px] m-[0px auto]`,
		...(darkModeLocalStorage === false
			? {}
			: {
					backgroundColor: cssVars.colorDark
				}),
		...(showNav === false
			? {}
			: {
					...tw`fixed`
				}),
		'.container': {
			...tw`text-center`,
			'.switch': {
				...tw`m-[10px 0px]`
			}
		},
		'.menu': {
			...tw`border-b-0 text-center block`,
			...(darkModeLocalStorage === false
				? {}
				: {
						backgroundColor: cssVars.colorDark
					})
		}
	}
}))

export default useStyles
