import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	AboutMe: {
		...tw``,
		'.container': {
			...tw`flex justify-center items-center gap-10 p-[60px] `,
			...tw`max-lg:merge-[ block text-center ]`,
			...tw`max-sm:merge-[ p-[30px 20px] ]`,
			'.logo': {
				...tw`w-[500px] h-[340px]`,
				...tw`max-md:merge-[ w-[370px] h-[230px] ]`,
				...tw`max-sm:merge-[ w-[260px] h-[160px] ]`,
				...tw`max-xs:merge-[ w-[200px] h-[110px] ]`
			},
			'.content': {
				...tw`block`,
				'.title': {
					...tw`text-white font-black font-sans`,
					textShadow: '2px 2px #939393'
				},
				'.description': {
					...tw`text-white font-extrabold font-sans m-[10px 0px]`
				}
			}
		}
	}
})

export default useStyles
