import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	Solutions: {
		...tw`p-[20px 20px 80px 20px] bg-subPrimary h-[100%]`,
		...(darkModeLocalStorage === false
			? {}
			: {
					...tw`border-2 border-solid border-gray-500 text-white`,
					backgroundColor: cssVars.colorDark
				})
	}
}))

export default useStyles
