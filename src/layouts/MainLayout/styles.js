import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	MainLayout: {
		...tw`bg-white max-w-[1920px] m-[0px auto] relative`,
		'.container-header': {
			...tw`fixed top-0 right-0 left-0 z-20`,
			'.header': {
				...tw`bg-gray-800`,
				...tw`max-sm:merge-[ m-[60px] ]`
			}
		},
		'.container-content': {
			...tw`mt-[116px]`
		}
	}
})

export default useStyles
