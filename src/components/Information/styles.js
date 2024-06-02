import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { darkModeLocalStorage, reviewer, reviewerPage }) => ({
	Information: {
		...tw`text-center`,
		...(reviewer === false
			? {}
			: {
					...tw``
				}),
		...(reviewerPage === false
			? {}
			: {
					...tw`flex items-center justify-center p-[16px] cursor-pointer`,
					':hover': {
						...tw`bg-[#00b472] rounded-[20px]`
					},
					'.active': {
						...tw`bg-[#00b472] rounded-[20px]`
					}
				}),
		'.img': {
			...tw`w-[120px] h-[120px] m-[0px auto] rounded-full`,
			...(reviewerPage === false
				? {}
				: {
						...tw`w-[70px] h-[70px] m-[0px 10px 0px 0px ]`
					})
		},
		'.content-text': {
			...(reviewerPage === false
				? {
						...tw``
					}
				: {
						...tw`text-left`
					}),
			'.text': {
				...tw`m-[10px 0px]`,
				...(reviewerPage === false
					? {}
					: {
							...tw`text-left`
						}),
				...(darkModeLocalStorage === true
					? {
							...tw`text-white`
						}
					: {})
			},
			'.description': {
				...tw`opacity-[.7]`,
				...(reviewerPage === false
					? {
							...tw`p-[0px 50px]`
						}
					: {
							...tw``,
							display: 'block',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							width: '140px'
						}),
				...(darkModeLocalStorage === true
					? {
							...tw`text-white`
						}
					: {})
			}
		}
	}
}))

export default useStyles
