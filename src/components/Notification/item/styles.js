import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	ItemNotification: {
		...tw`flex justify-center items-center gap-4 flex-wrap`,
		'.dot': {
			...tw`text-[30px] text-gray-500`,
			...(darkModeLocalStorage === true
				? {
						...tw`text-white`
					}
				: {})
		},
		'.image': {
			...tw` rounded-full w-[50px] h-[50px]`,
			...tw`max-xs:merge-[ w-[30px] h-[30px] ]`
		},
		'.description': {
			...tw`min-w-[100px]`,
			...tw`max-lg:merge-[ w-[180px] ]`,
			...tw`max-xs:merge-[ w-[120px] ]`,
			...(darkModeLocalStorage === true
				? {
						...tw`text-white`
					}
				: {}),
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		'.date': {
			...tw``,
			...(darkModeLocalStorage === true
				? {
						...tw`text-white`
					}
				: {})
		},
		'.container-btn': {
			...tw` flex justify-center items-center gap-4`,
			'.btn': {
				...tw``
			}
		}
	}
}))

export default useStyles
