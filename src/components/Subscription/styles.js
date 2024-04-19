import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	Subscription: {
		...tw`bg-[url('/assets/images/homePage/pexels-photo-4050301.jpeg')] bg-cover bg-center p-[60px]`,
		...tw`max-sm:merge-[ p-[30px 20px] ]`,
		'.content': {
			...tw`block`,
			'.title': {
				...tw`text-white font-extrabold font-sans max-w-[700px] m-[0px auto] text-center`
			},
			'.description': {
				...tw`text-white font-extrabold font-sans max-w-[800px] m-[0px auto] text-center p-[10px 0px]`
			},
			'.submit': {
				...tw`flex justify-center items-center`
			}
		}
	}
})

export default useStyles
