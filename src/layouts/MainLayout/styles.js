import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	MainLayout: {
		...tw`bg-white`,
		'.header': {
			...tw`bg-gray-800`,
			...tw`max-sm:merge-[ m-[60px] ]`
		}
	}
})

export default useStyles