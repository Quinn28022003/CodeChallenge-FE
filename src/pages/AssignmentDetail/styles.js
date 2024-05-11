import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles(_ => ({
	AssignmentDetail: {
		...tw``,
		'.row': {
			...tw`flex justify-between`,
			'.submissions': {
				...tw`bg-subPrimary h-[100vh] p-[20px]`,
				'.title': {
					...tw`text-center`
				},
				'.image': {
					...tw`h-[80px] w-[80px] rounded-full m-[20px 0px]`
				},
				'.sub-title': {
					...tw``
				},
				'.description': {
					...tw`m-[20px 0px]`
				}
			},
			'.evaluate': {
				...tw`bg-subPrimary h-[100vh] p-[20px]`,
				'.title': {
					...tw`text-center`
				},
				'.sub-title': {
					...tw`m-[20px 0px 10px 0px]`
				},
				'.btn': {
					...tw`m-[20px 0px]`
				}
			}
		}
	}
}))

export default useStyles
