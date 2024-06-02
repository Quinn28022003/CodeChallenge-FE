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
				...tw`bg-white rounded-[4px] max-h-[76vh] overflow-y-auto relative`,
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
					...tw`flex justify-between items-center sticky top-0 left-0 right-0 
					p-[14px] z-10 border-b-2 border-t-0 border-r-0 border-l-0 border-solid `,
					...(darkModeLocalStorage === false
						? {
								...tw`border-gray-200`,
								backgroundColor: '#ffffff'
							}
						: {
								...tw`border-gray-600 text-white`,
								backgroundColor: cssVars.colorDark
							}),
					'.quantity': {
						...tw`text-red-500`
					},
					'.title': {
						...tw``
					},
					'.btn-close': {
						...tw``
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
