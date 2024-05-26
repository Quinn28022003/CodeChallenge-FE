import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage, innerWidth }) => ({
	Account: {
		...tw`p-[40px]`,
		...tw`max-sm:merge-[ p-[20px] ]`,
		...tw`max-xs:merge-[ p-[10px] ]`,
		...(darkModeLocalStorage === false
			? {}
			: {
					backgroundColor: cssVars.colorDark
				}),
		'.menu-account': {
			...tw`mb-[30px]`,
			...(darkModeLocalStorage === false
				? {}
				: {
						backgroundColor: cssVars.colorDark
					})
		}
	}
}))

export default useStyles
