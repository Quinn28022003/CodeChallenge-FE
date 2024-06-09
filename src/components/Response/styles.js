import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'
import { getScrollbarStyles } from '~/utils/scrollbarStyles'

const useStyles = createStyles((_, { darkModeLocalStorage, innerWidth }) => {
	const scrollbarStyles = getScrollbarStyles()
	return {
		Response: {
			...tw`max-sm:merge-[ p-[10px] ]`,
			'.row': {
				...tw`flex justify-between`,
				'.col': {
					...tw`w-full`,
					'.list-Response': {
						...tw`rounded-[4px] p-[20px]`,
						...tw`max-lg:merge-[ mb-[30px] ]`,
						boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
						...(darkModeLocalStorage === false
							? {}
							: {
									backgroundColor: cssVars.colorPrimary
								}),
						'.list': {
							...tw`list-none p-0 h-[76vh] overflow-y-auto`,
							...(innerWidth < 1200
								? {
										'::-webkit-scrollbar': {
											display: 'none'
										}
									}
								: {
										...scrollbarStyles
									}),
							'.item': {
								...tw``
							}
						}
					},
					'.form-review': {
						...tw`rounded-[4px] p-[20px]`,
						boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
						...(darkModeLocalStorage === false
							? {}
							: {
									backgroundColor: cssVars.colorPrimary
								}),
						'.title': {
							...tw`text-center mb-[30px]`,
							...(darkModeLocalStorage === false
								? {}
								: {
										...tw`text-white`
									})
						},
						'.person-being-evaluated': {
							...tw`text-center m-[20px 0px]`,
							'.name': {
								...tw`m-[10px 0px]`,
								...(darkModeLocalStorage === false
									? {}
									: {
											...tw`text-white`
										})
							},
							'.image': {
								...tw`w-[60px] h-[60px] rounded-full bg-white`
							}
						},
						'.sub-title': {
							...tw`m-[20px 0px 6px 0px]`,
							...(darkModeLocalStorage === false
								? {}
								: {
										...tw`text-white`
									})
						},

						'.input': {
							...tw``
						},
						'.text-area': {
							...tw`h-[80px]`
						},
						'.rate': {
							...tw`block`
						},
						'.btn': {
							...tw`mt-[20px]`
						}
					}
				}
			}
		}
	}
})

export default useStyles
