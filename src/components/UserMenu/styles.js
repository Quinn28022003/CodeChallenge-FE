import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, darkModeLocalStorage) => ({
	UserMenu: {
		...tw``,
		'.menu': {
			...tw``,
			...(darkModeLocalStorage === false
				? {}
				: {
						backgroundColor: cssVars.colorDark
					})
		}
	}
}))

export default useStyles
