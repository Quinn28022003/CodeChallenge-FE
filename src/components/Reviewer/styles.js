import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	Reviewer: {
		...tw`text-center`,
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
		},
		'.error': {
			...tw` text-gray-500 p-[30px 0px] `
		},
		'.comtainer-loading': {
			...tw`flex`,
			'.loading': {
				...tw`w-[200px] m-[20px auto]`
			}
		}
	}
})

export default useStyles
