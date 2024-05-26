import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'
import { getScrollbarStyles } from '~/utils/scrollbarStyles'

const useStyles = createStyles((_, { darkModeLocalStorage, innerWidth, showUserList }) => {
	const scrollbarStyles = getScrollbarStyles()
	return {
		Chat: {
			...tw`p-[40px]`,
			...tw`max-lg:merge-[ p-[20px] ]`,
			...tw`max-xs:merge-[ p-[10px] ]`,
			...(darkModeLocalStorage === false
				? {}
				: {
						backgroundColor: cssVars.colorDark
					}),
			'.row': {
				...tw`flex justify-between h-[100vh]`,
				'.col': {
					...tw`relative`,
					'.list': {
						...tw`w-full bg-white p-[20px] h-[100vh] rounded-[4px] overflow-y-auto`,
						...(innerWidth < 992
							? {
									'::-webkit-scrollbar': {
										display: 'none'
									}
								}
							: {
									...scrollbarStyles
								}),
						boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
						...(darkModeLocalStorage === false
							? {}
							: {
									backgroundColor: cssVars.colorPrimary
								}),
						...(innerWidth < 992
							? {
									...(showUserList === false
										? {
												...tw`absolute z-10 left-[-1000px]`,

												transform: 'translate(-500px,0px)',
												transition: 'transform 0.5s ease-in-out'
											}
										: {
												...tw`absolute z-10 left-[-1000px]`,
												transform: 'translate(1040px,0px)',
												transition: 'transform 0.5s ease-in-out'
											})
								}
							: {})
					},
					'.container': {
						...tw`h-[100vh] w-full`,
						...(innerWidth < 992
							? {
									...tw`flex`
								}
							: {}),
						'.btn-show': {
							...tw`h-[100%] mr-[10px]`,
							...(innerWidth < 992
								? {}
								: {
										...tw`hidden`
									})
						},
						'.content': {
							...tw`w-full h-[100vh] rounded-[4px] relative p-[20px]`,
							boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
							...(darkModeLocalStorage === false
								? {}
								: {
										backgroundColor: cssVars.colorPrimary
									}),

							'.list-message': {
								...tw`list-none p-0 h-[90%] overflow-y-auto flex flex-col-reverse`,
								'::-webkit-scrollbar': {
									display: 'none'
								},
								'.item': {
									...tw``
								}
							},
							'.form': {
								...tw`flex items-center gap-2 absolute bottom-[10px] right-[10px] left-[10px]`,
								'.input': {
									...tw``
								},
								'.btn': {
									...tw``
								},
								'.icon': {
									...tw`text-[20px] cursor-pointer`
								}
							}
						}
					}
				}
			}
		}
	}
})

export default useStyles
