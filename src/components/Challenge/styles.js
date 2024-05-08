import { createStyles } from 'antd-style'
import tw from 'twin.macro'
import { cssVars } from '~/theme'
import { getScrollbarStyles } from '~/utils/scrollbarStyles'

const useStyles = createStyles((_, { darkModeLocalStorage, innerWidth }) => {
	const scrollbarStyles = getScrollbarStyles(innerWidth)
	return {
		Challenge: {
			...tw`rounded-[8px]`,
			'.container': {
				...tw`text-center`,
				'.title': {
					...tw`${'text-white font-extrabold font-sans text-center m-[40px 0px]'}`,
					...tw`max-sm:merge-[ mb-[30px] ]`,
					textShadow: '2px 2px #939393',
					...tw`max-lg:merge-[ decoration-1 ]`
				},

				'.table': {
					...tw`rounded-[8px] overflow-x-auto`,
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
						...tw`w-[1300px] m-[0px auto] `,
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
				...(darkModeLocalStorage
					? {
							'.ant-pagination': {
								...tw`gap-6`,
								'.ant-pagination-prev': {
									...tw`bg-white`
								},
								'.ant-pagination-item': {
									...tw`text-white`,
									a: {
										...tw`text-white`
									}
								},
								'.ant-pagination-item-active': {
									...tw``,
									a: {
										color: cssVars.colorPrimary
									}
								},
								'.ant-pagination-next': {
									...tw`bg-white`
								}
							}
						}
					: {
							'.ant-pagination': {
								...tw`gap-6`
							}
						})
			}
		}
	}
})

export default useStyles
