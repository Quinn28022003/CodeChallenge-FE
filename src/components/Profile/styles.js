import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	Profile: {
		...tw``,
		'.row': {
			...tw`flex justify-between`,
			...tw`max-lg:merge-[ block ]`,
			'.col': {
				...tw``,
				...tw`max-lg:merge-[ mb-[32px] ]`,
				'.container-information': {
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
				},
				'.container-challenge': {
					...tw`rounded-[4px] p-[20px] flex gap-[50px]`,
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
					}
				},
				'.container-completed-latest': {
					...tw`rounded-[4px] p-[20px] m-[30px 0px]`,
					boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
					...(darkModeLocalStorage === false
						? {}
						: {
								backgroundColor: cssVars.colorPrimary
							}),
					'.title': {
						...tw`text-gray-400 font-light`,
						...(darkModeLocalStorage === false
							? {}
							: {
									...tw`text-white`
								})
					},
					'.list': {
						...tw`list-none p-0`,
						'.item': {
							...tw`m-[20px 0px 10px 10px]`,
							'.text': {
								...tw`mr-[10px] w-[90%] text-black cursor-pointer inline-block`,
								...tw`max-lg:merge-[ w-[90%] ]`,
								...tw`max-md:merge-[ w-[80%] ]`,
								...tw`max-sm:merge-[ w-[70%] ]`,
								...tw`max-xs:merge-[ w-[60%] ]`,
								...(darkModeLocalStorage === false
									? {}
									: {
											...tw`text-white`
										}),
								whiteSpace: 'nowrap',
								textOverflow: 'ellipsis'
							},
							'.btn': {
								...tw``
							}
						}
					}
				},
				'.container-comments-latest': {
					...tw`rounded-[4px] p-[20px] m-[30px 0px]`,
					boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
					...(darkModeLocalStorage === false
						? {}
						: {
								backgroundColor: cssVars.colorPrimary
							}),
					'.title': {
						...tw`text-gray-400 font-light`,
						...(darkModeLocalStorage === false
							? {}
							: {
									...tw`text-white`
								})
					},
					'.list': {
						...tw`list-none p-0`,
						'.item': {
							...tw`m-[20px 0px 10px 10px]`,
							'.text': {
								...tw`mr-[10px] w-[90%] text-black cursor-pointer inline-block`,
								...tw`max-lg:merge-[ w-[90%] ]`,
								...tw`max-md:merge-[ w-[80%] ]`,
								...tw`max-sm:merge-[ w-[70%] ]`,
								...tw`max-xs:merge-[ w-[60%] ]`,
								...(darkModeLocalStorage === false
									? {}
									: {
											...tw`text-white`
										}),
								whiteSpace: 'nowrap',
								textOverflow: 'ellipsis'
							},
							'.btn': {
								...tw``
							}
						}
					}
				}
			}
		}
	}
}))

export default useStyles
