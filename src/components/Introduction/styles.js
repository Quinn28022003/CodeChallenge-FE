import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	Introduction: {
		...tw`bg-[url('/assets/images/homePage/backgroud-introduction.jpg')] h-[30%] bg-cover bg-center mt-1 `,
		'.coating': {
			...tw`bg-[rgba(31,41,55,0.8)] h-full flex justify-center items-center p-[0px 60px]`,
			...tw`max-sm:merge-[ p-[0px 20px] block text-center p-[20px 20px] ] `,
			'.image-girl': {
				...tw`w-[420px] h-[420px]`,
				...tw`max-xl:merge-[ w-[360px] h-[360px] ]`,
				...tw`max-lg:merge-[ w-[300px] h-[300px] ]`,
				...tw`max-md:merge-[ w-[270px] h-[270px] ]`,
				...tw`max-xs:merge-[ w-[200px] h-[200px] ]`
			},
			'.content': {
				...tw`block max-w-[820px]`,
				'.title': {
					...tw`text-white font-extrabold font-sans`
				},
				'.description': {
					...tw`text-white font-extrabold font-sans m-[10px 0px]`
				},
				'.btn': {
					...tw``
				}
			}
		}
	}
})

export default useStyles
