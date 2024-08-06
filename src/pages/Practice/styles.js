import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage, innerWidth }) => ({
	Practice: {
		...tw`h-[100vh]`,
		...(darkModeLocalStorage === false
			? {}
			: {
					backgroundColor: cssVars.colorDark
				}),
		'.container-header': {
			...tw`fixed top-0 right-0 left-0 z-20`,
			'.header': {
				...tw`bg-gray-800`,
				...tw`max-sm:merge-[ m-[60px] ]`
			}
		},
		'.row': {
			...tw`flex justify-between`,
			...(darkModeLocalStorage === false
				? {}
				: {
						backgroundColor: cssVars.colorDark
					}),
			'.col': {
				...tw`block relative`,
				'.container-script': {
					...tw`bg-subPrimary p-[ 10px 20px 20px 20px] h-[100%]`,
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`border-2 border-solid border-gray-500`,
								backgroundColor: cssVars.colorDark
							}),
					...(innerWidth < 768
						? {
								...tw`border-none`
							}
						: {}),
					...(innerWidth < 375
						? {
								...tw`p-0`
							}
						: {})
				},
				'.menu-practice': {
					...tw`absolute bottom-1 left-0 right-0`,
					...(innerWidth < 768
						? {
								...tw`bottom-0 left-0 right-0`
							}
						: {}),
					...(darkModeLocalStorage === false
						? {}
						: {
								backgroundColor: cssVars.colorDark,
								...tw`border-t-2 border-r-2 border-solid border-gray-500`
							}),
					...(innerWidth < 768
						? {
								...tw`border-b-2`
							}
						: {})
				}
			}
		}
	}
}))

export default useStyles
