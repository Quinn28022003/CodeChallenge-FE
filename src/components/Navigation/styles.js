import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	Navigation: {
		...tw`bg-white w-full h-full block items-start top-[70px]`,
		'.switch-container': {
			...tw`flex justify-center items-center p-[10px 0px]`
		},
		'.menu': {
			...tw`border-b-0 text-center block`
		}
	}
})

export default useStyles
