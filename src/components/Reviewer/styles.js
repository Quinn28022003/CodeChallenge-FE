import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	Reviewer: {
		...tw``,
		'.content': {
			...tw`bg-[url('/assets/images/homePage/hinh-nen-mau-xanh-la-cay-cho-may-tinh_032134713.jpg')] bg-cover bg-center p-[20px 60px]`,
			...tw`max-sm:merge-[ p-[20px] ]`,
			'.title': {
				...tw`text-white font-extrabold font-sans text-center`,
				textShadow: '2px 2px #939393',
				...tw`max-lg:merge-[ decoration-1 ]`
			},
			'.carousel': {
				...tw`h-[300px] flex items-center justify-center`
			}
		}
	}
})

export default useStyles
