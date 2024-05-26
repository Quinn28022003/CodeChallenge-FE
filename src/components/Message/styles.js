import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { darkModeLocalStorage, itIsMe }) => ({
	Message: {
		...tw`mb-[20px]`,
		...(itIsMe === false
			? {}
			: {
					...tw`flex justify-end`
				}),
		'.text': {
			...tw`bg-purple-200 max-w-[600px] break-words inline-block p-[10px 16px] rounded-[20px]`,
			...tw`max-xl:merge-[ max-w-[400px] ]`,
			...tw`max-sm:merge-[ max-w-[300px] ]`,
			...tw`max-xs:merge-[ max-w-[260px] ]`,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`bg-green-400 text-white`
					}),
			...(itIsMe === false
				? {
						...tw``
					}
				: {
						...tw``,
						...tw`bg-subPrimary text-black`
					})
		},
		'.info': {
			...(itIsMe === false
				? {
						...tw`flex justify-start items-center`
					}
				: {
						...tw`flex justify-end items-center`
					}),
			'.time': {
				...tw`opacity-40`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw` text-white opacity-60`
						})
			},
			'.date': {
				...tw`m-[10px] opacity-40`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw` text-white opacity-60`
						})
			}
		}
	}
}))

export default useStyles
