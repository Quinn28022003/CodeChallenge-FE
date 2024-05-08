import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, darkModeLocalStorage) => ({
	Language: {
		...tw` p-[60px]`,
		...tw`max-md:merge-[ p-[30px 20px] ]`,

		'.container': {
			...tw``,
			'.title': {
				...tw`text-white font-extrabold font-sans text-center mb-[40px]`,
				textShadow: '2px 2px #939393',
				...tw`max-lg:merge-[ decoration-1 ]`
			},
			'.content': {
				...tw`flex justify-center items-center flex-wrap gap-10`,
				...tw`max-md:merge-[ gap-20 ]`,
				'.item': {
					...tw`w-[30%] text-center`,
					...tw`max-sm:merge-[ w-[100%] ]`,
					'.image': {
						...tw`h-[80px] w-[80px]`
					},
					'.sub-title': {
						...tw`mt-[10px] font-bold`,
						...(darkModeLocalStorage === false
							? {}
							: {
									...tw`text-white`
								})
					}
				}
			}
		}
	}
}))

export default useStyles
