import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage, innerWidth }) => ({
	Submit: {
		...tw`p-[20px 20px 80px 20px] bg-subPrimary h-[100%]`,
		...(innerWidth < 768
			? {
					...tw`w-[100vw]`
				}
			: {}),
		...(darkModeLocalStorage === false
			? {}
			: {
					...tw`border-2 border-solid border-gray-500`,
					backgroundColor: cssVars.colorDark
				}),
		'.title': {
			...tw`m-[20px 0px 10px 0px]`,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`text-white`
					})
		},
		'.input': {
			...tw`w-[200px]`
		}
	}
}))

export default useStyles
