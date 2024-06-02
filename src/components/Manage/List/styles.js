import { createStyles } from 'antd-style'
import tw from 'twin.macro'
import { cssVars } from '~/theme'

import { getScrollbarStyles } from '~/utils/scrollbarStyles'

const useStyles = createStyles((_, { darkModeLocalStorage }) => {
	const scrollbarStyles = getScrollbarStyles()
	return {
		List: {
			...tw``,
			'.header': {
				...tw``,
				'.filter-container': {
					...tw`bg-white rounded-[8px] p-[10px 10px 0px 10px]`,
					boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
					...(darkModeLocalStorage === false
						? {}
						: {
								backgroundColor: '#001529'
							}),
					'.btn': {
						...tw`m-[0px 10px 10px 0px]`
					}
				},
				'.input': {
					...tw`m-[20px 0px]`,
					boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`text-white`,
								backgroundColor: '#001529',
								borderColor: '#001529'
							})
				}
			},
			'.table': {
				...tw`rounded-[8px] overflow-x-auto`,
				boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
				...(innerWidth < 992
					? {
							'::-webkit-scrollbar': {
								display: 'none'
							}
						}
					: {
							...scrollbarStyles,
							'::-webkit-scrollbar-track': {
								background: 'white',
								borderRadius: '0px'
							},
							'::-webkit-scrollbar-thumb': {
								background: '#b2b2b2',
								borderRadius: '0px'
							}
						}),
				'.ant-table': {
					...tw`w-[2000px] m-[0px auto] `,
					'.ant-table-container .ant-table-content .ant-table-thead .ant-table-cell': {
						...tw`p-[14px 20px] text-white`,
						backgroundColor: cssVars.colorPrimary,
						'.ant-table-filter-trigger': {
							...tw`text-white`
						}
					},
					'.ant-table-container .ant-table-content .ant-table-tbody .ant-table-cell': {
						...tw`p-[14px 20px]`,
						...(darkModeLocalStorage ? tw`bg-subPrimary` : tw``)
					},
					'.ant-table-container ': {
						...tw`rounded-[8px]`
					}
				}
			},
			'.container-detail': {
				...tw`rounded-[8px] p-[20px] mt-[30px]`,
				boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
				...(darkModeLocalStorage === false
					? {}
					: {
							backgroundColor: '#001529'
						}),
				'.title': {
					...tw`text-center`,
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`text-white`
							})
				},
				'.content': {
					...tw`rounded-[4px] p-[20px]`,
					boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
					...(darkModeLocalStorage === false
						? {}
						: {
								backgroundColor: cssVars.colorPrimary
							}),
					'.image': {
						...tw`h-[80px] w-[80px] rounded-full`
					},
					'.text': {
						...tw`my-4 leading-normal`,
						wordWrap: 'break-word',
						...(darkModeLocalStorage === false
							? {}
							: {
									...tw`text-white`
								}),
						'&.socialAccounts': {
							...tw`m-[0px 0px 4px 0px]`
						},
						'.title': {
							...tw`pr-2`
						}
					}
				}
			}
		}
	}
})

export default useStyles
