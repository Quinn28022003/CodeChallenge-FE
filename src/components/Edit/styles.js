import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	Edit: {
		...tw``,
		'.row': {
			...tw`flex justify-between`,
			...tw`max-md:merge-[ block ]`,
			'.col': {
				...tw``,
				'.image': {
					...tw`w-full`,
					...tw`max-md:merge-[ w-[50%] mb-[20px] m-[0px auto] block ]`
				},
				'.form': {
					...tw``,
					'.title': {
						...tw`mb-[10px]`,
						...(darkModeLocalStorage === false
							? {}
							: {
									...tw`text-white`
								})
					},
					'.container-input': {
						...tw`m-[20px 0px]`,
						'.label': {
							...tw`mb-[10px] block opacity-40`,
							...(darkModeLocalStorage === false
								? {}
								: {
										...tw`text-white`
									})
						},
						'.content': {
							...tw`flex gap-6`,
							...tw`max-sm:merge-[ gap-3 ]`,
							'.input': {
								...tw``,
								...(darkModeLocalStorage === false
									? {}
									: {
											...tw`text-gray-500`
										})
							},
							'.btn': {
								...tw``
							}
						}
					},
					'.account': {
						...tw`mt-[30px]`
					},
					'.social-account': {
						...tw`mt-[30px]`
					},
					'.container-social-account': {
						...tw`mb-[20px]`,
						'.btn': {
							...tw``
						}
					},
					'.container-btn': {
						...tw`text-center`,
						'.btn': {
							...tw``
						}
					}
				}
			}
		}
	}
}))

export default useStyles
