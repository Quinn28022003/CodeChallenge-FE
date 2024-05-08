import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, darkModeLocalStorage) => ({
	Footer: {
		...tw`bg-subPrimary p-[60px] flex flex-wrap justify-between items-start gap-5 min-w-[1920px] m-[0px auto] `,
		...(darkModeLocalStorage === false
			? {}
			: {
					backgroundColor: cssVars.colorDark
				}),
		...tw`max-[1920px]:merge-[ min-w-0 m-0 ]`,
		...tw`max-md:merge-[ p-[30px 60px] ]`,
		...tw`max-[540px]:merge-[ justify-center p-[20px] ]`,
		'.social-network-link': {
			...tw`block`,
			...tw`max-[536px]:merge-[ text-center ]`,
			'.logo': {
				...tw`w-[90px] h-[70px]`
			},
			'.text': {
				...tw`p-[10px 0px]`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`text-white`
						})
			},
			'.social-accounts': {
				...tw`flex items-center gap-5`
			}
		},
		'.list': {
			...tw`w-[200px] list-none p-0`,
			...tw`max-[536px]:merge-[ text-center ]`,
			'.title': {
				...tw`font-extrabold`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`text-white`
						})
			},
			'.item': {
				...tw`m-[14px 0px] text-black font-light`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`text-white`
						})
			}
		}
	}
}))

export default useStyles
