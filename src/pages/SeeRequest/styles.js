import { createStyles } from 'antd-style'
import tw from 'twin.macro'
import { getScrollbarStyles } from '~/utils/scrollbarStyles'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, { innerWidth, darkModeLocalStorage }) => {
	const scrollbarStyles = getScrollbarStyles()
	return {
		SeeRequest: {
			...tw`p-[40px]`,
			...(innerWidth > 1200
				? {}
				: {
						...tw`p-[10px]`
					}),
			...(darkModeLocalStorage === false
				? {}
				: {
						backgroundColor: cssVars.colorDark
					}),
			'.row': {
				...tw`flex justify-between`,
				...(innerWidth > 1200
					? {}
					: {
							...tw`block`
						}),
				'.col': {
					...tw``,
					'.container-list-request': {
						...tw``,
						'.menu': {
							...tw`mb-[10px]`,
							...(darkModeLocalStorage === false
								? {}
								: {
										backgroundColor: cssVars.colorDark
									})
						},
						'.content': {
							...tw`bg-subPrimary rounded-[8px]`,
							'.table': {
								...tw`rounded-[8px] overflow-x-auto`,
								boxShadow: '1px 1px 10px rgba(0,0,0,.1)',
								...(innerWidth < 992
									? {
											'::-webkit-scrollbar': {
												display: 'none'
											}
										}
									: {
											...scrollbarStyles
										}),
								'.ant-table': {
									...tw`w-[1120px]`,
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
								},
								'.image': {
									...tw`h-[40px] w-[40px] rounded-[50%]`
								},
								'.description': {
									...tw``,
									display: 'block',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									width: '140px'
								}
							}
						}
					},
					'.container-list-review': {
						...tw`rounded-[20px] `,
						boxShadow: '2px 2px 10px rgba(0,0,0,.2)',
						...(darkModeLocalStorage === false
							? {}
							: {
									backgroundColor: cssVars.colorPrimary
								}),
						...(innerWidth > 1200
							? {}
							: {
									...tw`mt-[40px]`
								}),
						'.list': {
							...tw`list-none p-0`,
							...(innerWidth > 1200
								? {}
								: {
										...tw`flex flex-wrap justify-center`
									})
						},
						'.title': {
							...tw`text-center p-[20px 0px]`
						}
					}
				}
			}
		}
	}
})

export default useStyles
