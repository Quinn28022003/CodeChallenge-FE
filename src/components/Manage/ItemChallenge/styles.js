import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const ItemChallenge = createStyles(_ => ({
	ItemChallenge: {
		...tw`mb-[20px]`,
		'.container': {
			...tw``,
			'.content-challenge': {
				...tw`flex items-center justify-between mb-[14px]`,
				'.content-title-challenge': {
					...tw`flex items-center`,
					'.STT': {
						...tw`mr-[10px]`
					}
				},
				'.date': {
					...tw`opacity-[.7] ml-[10px]`
				},
				'.btn': {
					...tw``
				}
			},
			'.content-user': {
				...tw`flex gap-[20px] items-center ml-[20px]`,
				'.img': {
					...tw`w-[50px] h-[50px] rounded-full`
				},

				'.text': {
					...tw`m-[10px 0px]`
				},
				'.date': {
					...tw`opacity-[.7]`
				}
			},
			'.comment': {
				...tw`m-[10px 20px]`
			}
		}
	}
}))

export default ItemChallenge

// display: 'block',
// 									whiteSpace: 'nowrap',
// 									overflow: 'hidden',
// 									textOverflow: 'ellipsis',
// 									width: '140px'
