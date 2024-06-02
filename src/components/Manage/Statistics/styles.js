import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'
import { getScrollbarStyles } from '~/utils/scrollbarStyles'

const useStyles = createStyles((_, { darkModeLocalStorage }) => {
	const scrollbarStyles = getScrollbarStyles()
	return {
		Statistics: {
			...tw``,
			'.statistics-row': {
				...tw`flex justify-between`,
				'.statistics-col': {
					...tw``
				}
			},
			'.statistic-connection': {
				...tw`rounded-[4px] p-[20px] flex gap-[50px] mb-[30px]`,
				boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
				...(darkModeLocalStorage === false
					? {}
					: {
							backgroundColor: cssVars.colorPrimary
						}),
				'.ant-statistic-title': {
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`text-white`
							})
				},
				'.ant-statistic-content': {
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`text-white`
							})
				},
				'.statistic': {
					...tw``
				}
			},
			'.statistic-role ,.statistic-language ,.statistic-Challenges ,.statistic-tags': {
				...tw`rounded-[4px] p-[20px] flex gap-[50px] flex-wrap mb-[30px]`,
				boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
				...(darkModeLocalStorage === false
					? {}
					: {
							backgroundColor: cssVars.colorPrimary
						}),
				'.ant-statistic-title': {
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`text-white`
							})
				},
				'.ant-statistic-content': {
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`text-white`
							})
				},
				'.statistic': {
					...tw``
				}
			},
			'.reviewer-ratings': {
				...tw`rounded-[4px] p-[20px] mb-[30px]`,
				boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
				...(darkModeLocalStorage === false
					? {}
					: {
							backgroundColor: cssVars.colorPrimary
						}),
				'.list': {
					...tw`list-none p-0  overflow-y-auto`,
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
				},
				'.title': {
					...tw`text-gray-400 font-light mb-[20px]`,
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`text-white`
							})
				}
			},
			'.create-the-latest-user': {
				...tw`rounded-[4px] p-[20px] mb-[30px]`,
				boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
				...(darkModeLocalStorage === false
					? {}
					: {
							backgroundColor: cssVars.colorPrimary
						}),
				'.list': {
					...tw`list-none p-0  overflow-y-auto`,
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
				},
				'.title': {
					...tw`text-gray-400 font-light mb-[20px]`,
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`text-white`
							})
				}
			}
		}
	}
})

export default useStyles
