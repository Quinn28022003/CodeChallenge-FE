import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	AddChallenge: {
		...tw`rounded-[8px] p-[10px]`,
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
		'.form': {
			...tw``,
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
}))

export default useStyles
