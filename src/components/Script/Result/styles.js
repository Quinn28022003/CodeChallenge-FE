import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { darkModeLocalStorage, innerWidth }) => ({
	Result: {
		...tw`mt-[20px] bg-white p-[10px 20px]`,
		...(darkModeLocalStorage === false
			? {}
			: {
					...tw`bg-[#1e1e1e]`
				}),
		...(innerWidth < 375
			? {
					...tw`p-[10px 6px]`
				}
			: {}),
		'.result-header': {
			...tw`flex justify-between items-center pb-[20px] bg-white border-b-2 border-t-0 border-l-0 border-r-0 border-solid border-gray-300`,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`bg-[#1e1e1e]`
					}),

			'.menu': {
				...tw`w-[400px] border-b-0 text-center block`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`bg-[#1e1e1e]`
						})
			},
			'.btn-error': {
				...tw`bg-transparent`
			}
		},
		'.content': {
			...tw``,
			'.title': {
				...tw`m-[10px 0px]`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`text-white`
						})
			},
			'.input': {
				...tw`m-[10px 0px]`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`bg-[#1e1e1e]`
						})
			}
		}
	}
}))

export default useStyles
