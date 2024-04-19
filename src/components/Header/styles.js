import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	Header: {
		...tw`bg-white`,
		'.header-container': {
			...tw`p-[0px 60px] h-[70px] w-full flex justify-between items-center relative`,
			...tw`max-sm:p-[0px 20px]`,
			'.logo': {
				...tw`w-[90px] h-[70px]`
			},
			'.content-between': {
				...tw`absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center`
			},
			'.content-right': {
				...tw`flex justify-center gap-7`,
				...tw`max-[375px]:gap-4`,
				'.hoverButton': {
					...tw`border-transparent shadow-none`,
					':hover': {
						...tw`border-solid`
					}
				},
				'.line': {
					...tw`w-[1px] h-[30px] border-[1px] border-gray-500 border-solid`
				}
			}
		}
	}
})

export default useStyles
