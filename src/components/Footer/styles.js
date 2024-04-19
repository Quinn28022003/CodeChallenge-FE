import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	Footer: {
		...tw`bg-subPrimary p-[60px] flex flex-wrap justify-between items-start gap-5`,
		...tw`max-md:merge-[ p-[30px 60px] ]`,
		...tw`max-[540px]:merge-[ justify-center p-[20px] ]`,
		'.social-network-link': {
			...tw`block`,
			...tw`max-[536px]:merge-[ text-center ]`,
			'.logo': {
				...tw`w-[90px] h-[70px]`
			},
			'.text': {
				...tw`p-[10px 0px]`,
				'&-dark-mode': {
					...tw`text-white`
				}
			},
			'.social-accounts': {
				...tw`flex items-center gap-5`
			}
		},
		'.list': {
			...tw`w-[200px] list-none p-0`,
			...tw`max-[536px]:merge-[ text-center ]`,
			'.title': {
				...tw`font-extrabold`,
				'&-dark-mode': {
					...tw`text-white`
				}
			},
			'.item': {
				...tw`m-[14px 0px] text-black font-light`,
				'&-dark-mode': {
					...tw`text-white`
				}
			}
		}
	}
})

export default useStyles
