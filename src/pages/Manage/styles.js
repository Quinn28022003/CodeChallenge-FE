import { createStyles } from 'antd-style'
import tw from 'twin.macro'
import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	Manage: {
		...tw`p-[10px]`,
		...tw`max-md:merge-[ relative ]`,
		...(darkModeLocalStorage === false
			? {}
			: {
					backgroundColor: cssVars.colorDark
				}),
		'.row': {
			...tw`flex justify-between`,
			'.col': {
				...tw``,
				'.container-menu': {
					...tw`sticky top-[120px]`,
					'.menu': {
						...tw`rounded-[8px] mb-[30px]`,
						boxShadow: '1px 1px 10px rgba(0,0,0,.2)'
					},
					'.title': {
						...tw`text-center mb-[10px]`,
						...(darkModeLocalStorage === false
							? {}
							: {
									...tw`text-white`
								})
					}
				},
				'.content': {
					...tw`mt-[36px]`
				}
			}
		},
		'.btn-show-menu': {
			...tw`sticky w-full bottom-0 left-0 right-0`
		}
	}
}))

export default useStyles
