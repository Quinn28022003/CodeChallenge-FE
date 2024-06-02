import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	InputCustom: {
		...tw`m-[20px 0px]`,
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
	}
}))

export default useStyles
