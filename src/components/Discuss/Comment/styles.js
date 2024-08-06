import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { innerWidth }) => ({
	Comment: {
		...tw`flex items-start m-[20px 0px]`,
		'.image': {
			...tw`w-[40px] h-[40px] rounded-full mr-[14px]`
		},
		'.content': {
			...tw``,
			'.name': {
				...tw`mr-[10px]`
			},
			'.date': {},

			'.description': {
				...tw`m-[10px 0px]`
			},
			'.container-button': {
				...tw`flex items-center`,
				...(innerWidth < 375
					? {
							...tw`flex-wrap`
						}
					: {}),
				'.btn-heart': {
					...tw``
				},
				'.btn-comment': {
					...tw``
				},
				'.btn-feedback': {
					...tw``
				}
			}
		}
	}
}))

export default useStyles
