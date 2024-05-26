import { createStyles } from 'antd-style'
import tw from 'twin.macro'
import { cssVars } from '~/theme'

const useStyles = createStyles((_, darkModeLocalStorage) => ({
	Home: {
		...tw`bg-subPrimary max-w-[1920px] m-[0px auto]`,
		...(darkModeLocalStorage === false
			? {}
			: {
					backgroundColor: cssVars.colorDark
				}),
		'.backgourd': {
			...tw`bg-[url('/assets/images/homePage/backgroud.png')] bg-cover bg-center`,
			'.line': {
				...tw`bg-gray-200 h-[3px] rounded-full m-[0px 60px]`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`bg-subPrimary`
						})
			}
		},
		'.container-challenge': {
			...tw`p-[0px 20px]`
		}
	}
}))

export default useStyles
