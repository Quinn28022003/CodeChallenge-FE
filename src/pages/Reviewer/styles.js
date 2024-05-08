import { createStyles } from 'antd-style'
import tw from 'twin.macro'
import { cssVars } from '~/theme'
import { getScrollbarStyles } from '~/utils/scrollbarStyles'

const useStyles = createStyles((_, { darkModeLocalStorage, showListReviewer, innerWidth }) => {
	const scrollbarStyles = getScrollbarStyles(innerWidth)
	return {
		ReviewerPage: {
			...tw`p-[70px] max-w-[1920px] m-[0px auto] `,
			...tw`max-sm:merge-[ p-[20px] ]`,
			...(darkModeLocalStorage === false
				? {
						...tw`bg-[url('/assets/images/homePage/anh-nen-mau-xanh-la-cay-cho-dien-thoai_032128129.jpg')] bg-cover bg-center`
					}
				: {
						backgroundColor: cssVars.colorDark
					}),
			'.container-reviewer': {
				...tw`flex justify-between relative  overflow-hidden`,
				'.information': {
					...tw`h-[800px] p-[60px] text-center rounded-[8px] border-2 border-solid border-gray-200 relative overflow-y-auto`,
					...scrollbarStyles,
					...tw`max-sm:merge-[ p-[50px 20px] ]`,
					backgroundColor: cssVars.colorPrimary,
					'.img': {
						...tw`w-[400px] h-[400px] rounded-[40px]`,
						...tw`max-sm:merge-[ w-[200px] h-[200px] ]`
					},
					'.content': {
						...tw`text-left`,
						'.text': {
							...tw`my-4`,

							'.title': {
								...tw`pr-3`
							}
						}
					},
					'.btn-right': {
						...tw`absolute left-0 top-0`,
						...(innerWidth < 992
							? {}
							: {
									...tw`hidden`
								})
					}
				},

				'.list': {
					...tw`h-[800px] text-center border-2 rounded-[8px] border-solid border-gray-200 overflow-hidden `,
					backgroundColor: cssVars.colorPrimary,
					...(innerWidth > 992
						? {}
						: {
								...(showListReviewer === false
									? {
											...tw`absolute left-[-360px]`,

											transform: 'translate(-360px,0px)',
											transition: 'transform 0.5s ease-in-out'
										}
									: {
											...tw`absolute left-[-360px]`,
											transform: 'translate(360px,0px)',
											transition: 'transform 0.5s ease-in-out'
										})
							}),
					'.title': {
						...tw`border-b-2 border-t-0 border-l-0 border-r-0 border-solid border-gray-200 p-[10px 0px] m-[10px] mb-[20px]`
					},
					'.content': {
						...tw`h-[800px] overflow-y-auto pb-[60px]`,
						...scrollbarStyles
					},
					'.btn-left': {
						...tw`mt-[24px]`,
						...(innerWidth < 992
							? {}
							: {
									...tw`hidden`
								})
					}
				}
			}
		}
	}
})

export default useStyles
