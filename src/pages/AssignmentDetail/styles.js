import { createStyles } from 'antd-style'
import tw from 'twin.macro'
import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	AssignmentDetail: {
		...tw``,
		'.row': {
			...tw`flex justify-between p-[20px]`,
			...tw`max-md:merge-[ block ]`,
			...(darkModeLocalStorage === false
				? {}
				: {
						backgroundColor: cssVars.colorDark
					}),
			'.submissions': {
				...tw`w-full p-[20px] rounded-[8px]`,
				boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
				...(darkModeLocalStorage === false
					? {}
					: {
							backgroundColor: cssVars.colorPrimary
						}),
				...tw`max-md:merge-[ mb-[30px] ]`,
				'.title': {
					...tw`text-center`,
					...(darkModeLocalStorage === true
						? {
								...tw`text-white`
							}
						: {})
				},
				'.image': {
					...tw`h-[80px] w-[80px] rounded-full m-[20px 0px]`
				},
				'.sub-title': {
					...tw``,
					...(darkModeLocalStorage === true
						? {
								...tw`text-white`
							}
						: {})
				},
				'.description': {
					...tw`m-[20px 0px]`,
					...(darkModeLocalStorage === true
						? {
								...tw`text-white`
							}
						: {})
				},
				'.container-btn-download': {
					...tw`m-[10px 0px 20px 0px]`,
					'.text': {
						...tw``,
						...(darkModeLocalStorage === true
							? {
									...tw`text-white`
								}
							: {})
					},
					'.btn-download': {
						...tw`block m-[10px 0px 20px 0px]`
					}
				}
			},
			'.evaluate': {
				...tw`w-full p-[20px] rounded-[8px]`,
				boxShadow: '1px 1px 10px rgba(0,0,0,.2)',
				...(darkModeLocalStorage === false
					? {}
					: {
							backgroundColor: cssVars.colorPrimary
						}),
				'.title': {
					...tw`text-center`,
					...(darkModeLocalStorage === true
						? {
								...tw`text-white`
							}
						: {})
				},
				'.sub-title': {
					...tw`m-[20px 0px 10px 0px]`,
					...(darkModeLocalStorage === true
						? {
								...tw`text-white`
							}
						: {})
				},
				'.btn': {
					...tw`m-[20px 0px]`
				}
			}
		}
	}
}))

export default useStyles
