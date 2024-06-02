import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles(() => ({
	InputCustom: {
		...tw`m-[20px 0px]`,
		'.content': {
			...tw`flex gap-6`,
			...tw`max-sm:merge-[ gap-3 ]`,
			'.input': {
				...tw``
			},
			'.btn': {
				...tw``
			}
		}
	}
}))

export default useStyles
