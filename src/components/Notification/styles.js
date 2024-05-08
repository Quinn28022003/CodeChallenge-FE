import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'
import { getScrollbarStyles } from '~/utils/scrollbarStyles'

const useStyles = createStyles((_, { darkModeLocalStorage, innerWidth }) => {
	const scrollbarStyles = getScrollbarStyles()

	return {
		Notification: {
			...tw`absolute h-[100vh] top-0 left-0 right-0 bottom-0 z-30 bg-[rgba(0,0,0,0.4)] flex justify-center items-center p-[20px]`,
			'.content': {
				...tw`bg-white rounded-[4px] border-2 border-solid border-white max-h-[76vh] overflow-y-auto relative`,
				...(innerWidth < 992
					? {
							'::-webkit-scrollbar': {
								display: 'none'
							}
						}
					: {
							...scrollbarStyles
						}),
				...(darkModeLocalStorage === true
					? {
							backgroundColor: cssVars.colorDark
						}
					: {}),
				'.header-notifi': {
					...tw`flex justify-between items-center sticky top-0 left-0 right-0 p-[20px 20px 0px 20px] z-10`,
					...tw`max-xs:merge-[ p-[10px 10px 0px 10px] ]`,
					...(darkModeLocalStorage === true
						? {
								backgroundColor: cssVars.colorDark
							}
						: {
								backgroundColor: '#ffffff'
							}),
					...(darkModeLocalStorage === true
						? {
								...tw`text-white`
							}
						: {}),
					'.quantity': {
						...tw`text-red-500`
					},
					'.title': {
						...tw``
					},
					'.btn-close': {
						...tw`mb-3`
					}
				},
				'.list': {
					...tw`list-none p-[0px 20px 20px 20px] min-w-[280px]`,
					...tw`max-xs:merge-[ p-[0px 10px 10px 10px] ]`,
					'.item': {
						...tw`m-[20px 0px]`
					},
					'.empty': {
						...tw`w-[30vw] h-[30vh] m-[30px auto 0px auto]`,
						'.ant-empty-description': {
							...(darkModeLocalStorage === true
								? {
										...tw`text-white`
									}
								: {})
						}
					}
				}
			}
		}
	}
})

export default useStyles
