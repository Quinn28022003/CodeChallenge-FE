import { createStyles } from 'antd-style'
import tw from 'twin.macro'
import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	UserItem: {
		...tw`flex items-center p-[20px]`,
		'&:hover': {
			...tw`bg-slate-100 rounded-[4px] cursor-pointer`,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`bg-[#00b472]`
					})
		},
		'&.active': {
			...tw`bg-slate-100 rounded-[4px] cursor-pointer`,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`bg-[#00b472]`
					})
		},
		'.dot': {
			...tw`text-[30px] text-gray-300`,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`text-white opacity-40`
					}),
			'&.active': {
				color: cssVars.colorPrimary,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`text-green-400 opacity-100`
						})
			}
		},
		'.image': {
			...tw`w-[60px] h-[60px] rounded-full m-[0px 20px]`
		},
		'.content-text': {
			'.text': {
				...tw`mb-[10px]`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`text-white`
						})
			},
			'.description': {
				...tw`opacity-[.7]`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`text-white`
						})
			}
		}
	}
}))

export default useStyles
