import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'
import { getScrollbarStyles } from '~/utils/scrollbarStyles'

const useStyles = createStyles((_, { innerWidth, darkModeLocalStorage }) => {
	const scrollbarStyles = getScrollbarStyles()
	return {
		SeeRequest: {
			...tw`p-[20px 40px]`,
			...tw`max-xl:merge-[ p-[20px 20px 40px 20px] ]`,
			...(darkModeLocalStorage === false
				? {}
				: {
						backgroundColor: cssVars.colorDark
					}),
			'.row': {
				...tw`flex justify-between h-[80vh]`,
				...tw`max-xl:merge-[ block h-full ]`,
				'.col': {
					...tw``,
					'.container-list-request': {
						...tw`h-[80vh]`,
						...tw`max-xl:merge-[ h-full mb-[100px] ]`,
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
									...tw`w-full`,
									...tw`max-2xl:merge-[ w-[1200px] ]`,
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
						...tw`rounded-[8px] h-[80vh] overflow-y-auto`,
						...tw`max-xl:merge-[ mt-[40px] ]`,
						boxShadow: '2px 2px 10px rgba(0,0,0,.2)',
						...(innerWidth < 992
							? {
									'::-webkit-scrollbar': {
										display: 'none'
									}
								}
							: {
									...scrollbarStyles
								}),
						...(darkModeLocalStorage === false
							? {}
							: {
									backgroundColor: cssVars.colorPrimary
								}),
						'.list': {
							...tw`list-none p-0`,
							...tw`max-xl:merge-[ grid grid-cols-4 gap-4 ]`,
							...tw`max-lg:merge-[ grid grid-cols-3 gap-4 ]`,
							...tw`max-md:merge-[ grid grid-cols-2 gap-4 ]`,
							...tw`max-sm:merge-[ grid grid-cols-1 gap-4 ]`
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
