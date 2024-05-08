import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'
import { getScrollbarStyles } from '~/utils/scrollbarStyles'

const useStyles = createStyles((_, { darkModeLocalStorage, innerWidth }) => {
	const scrollbarStyles = getScrollbarStyles(innerWidth)

	return {
		Demo: {
			...tw``,
			'.row': {
				...tw`flex justify-between`,
				...tw`max-lg:merge-[ block text-center ]`,
				'.col': {
					...tw`m-[30px 0px]`,
					'.content-select': {
						...tw``,
						section: {
							...tw`h-0`
						},
						'.title': {
							...(darkModeLocalStorage === false
								? {
										...tw`text-white`
									}
								: {
										...tw`text-black`
									})
						},
						'.select': {
							...tw`inline-block min-w-[160px] rounded-[8px] m-[10px 0px]`,
							...(darkModeLocalStorage === false
								? {
										backgroundColor: cssVars.colorPrimary
									}
								: {
										backgroundColor: cssVars.colorDark
									}),
							boxShadow: '0px 0px 6px rgba(0,0,0,.3)',
							transition: 'all .5s',
							':hover': {
								boxShadow: '0px 0px 10px rgba(0,0,0,.5)',
								transition: 'all .5s'
							}
						}
					},
					'.editor': {
						...tw`border-2 border-solid border-green-400 h-[400px]`
					},
					'.output': {
						...tw``,
						'.content': {
							...tw`h-[400px] bg-white border-2 border-solid border-green-400 p-[0px 20px] overflow-y-auto`,
							...(darkModeLocalStorage === false
								? {
										...tw`bg-white`
									}
								: {
										...tw`bg-[#1e1e1e]`
									}),
							...scrollbarStyles,
							'.list': {
								...tw`list-none p-0 text-left`,
								'.item': {
									...tw`m-[20px 0px]`,
									...(darkModeLocalStorage === false
										? {
												...tw`text-black`
											}
										: {
												...tw`text-white`
											})
								}
							}
						},
						'.btn': {
							...tw`m-[13px 0px] text-black`,
							...(darkModeLocalStorage === false
								? {
										backgroundColor: cssVars.colorPrimary
									}
								: {
										...tw`text-white`,
										backgroundColor: cssVars.colorDark
									})
						},
						'.title': {
							...(darkModeLocalStorage === false
								? {
										...tw`text-white`
									}
								: {
										...tw`text-black`
									})
						}
					}
				}
			}
		}
	}
})

export default useStyles
