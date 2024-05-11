import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	Discuss: {
		...tw`p-[20px 20px 60px 20px] bg-subPrimary h-[100%]`,
		...(darkModeLocalStorage === false
			? {}
			: {
					...tw`border-2 border-solid border-gray-500`,
					backgroundColor: cssVars.colorDark
				}),
		...(innerWidth < 768
			? {
					...tw`w-[100vw]`
				}
			: {}),
		'.container': {
			...tw``
		},
		'.sub-container': {
			...tw`ml-[60px]`,
			...(innerWidth < 576
				? {
						...tw`ml-[20px]`
					}
				: {})
		}
	}
}))

export default useStyles
