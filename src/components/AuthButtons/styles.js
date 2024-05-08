import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	AuthButtons: {
		...tw`flex justify-center gap-7`,
		...tw`max-[375px]:gap-4`,
		'.hoverButton': {
			...tw`border-transparent shadow-none`,
			':hover': {
				...tw`border-solid`
			}
		}
	}
})

export default useStyles
