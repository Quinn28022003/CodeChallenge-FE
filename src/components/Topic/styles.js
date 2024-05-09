import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles((_, { darkModeLocalStorage }) => ({
	Topic: {
		...tw`p-[20px 20px 60px 20px] bg-subPrimary h-[100%]`,
		...(darkModeLocalStorage === false
			? {}
			: {
					...tw`border-2 border-solid border-gray-500`,
					backgroundColor: cssVars.colorDark
				}),
		'.title': {
			...tw``,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`text-white`
					})
		},
		'.btn-difficult': {
			...tw`m-[10px 0px]`
		},
		'.topic': {
			...tw`m-[10px 0px]`,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`text-white`
					})
		},
		'.table': {
			...tw``,
			...(darkModeLocalStorage === false
				? {}
				: {
						'.ant-table': {
							...tw``,
							'.ant-table-container .ant-table-content .ant-table-thead .ant-table-cell': {
								...tw`p-[14px 20px] text-white`,
								backgroundColor: cssVars.colorPrimary,
								'.ant-table-filter-trigger': {
									...tw`text-white`
								}
							},
							'.ant-table-container .ant-table-content .ant-table-tbody .ant-table-cell': {
								...tw`p-[14px 20px]`,
								...(darkModeLocalStorage ? tw`bg-subPrimary` : tw``)
							},
							'.ant-table-container ': {
								...tw`rounded-[8px]`
							}
						}
					})
		},
		'.description': {
			...tw``,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`text-white`
					})
		},
		'.container-topic': {
			...tw`border-2 border-solid border-gray-200 p-[8px 6px] inline-block`,
			...(darkModeLocalStorage === false
				? {}
				: {
						...tw`border-gray-400`
					}),
			'.btn-topic': {
				...tw`mr-[6px]`
			}
		},
		'.list-restriction': {
			...tw``,
			'.item': {
				...tw`m-[10px 0px]`
			}
		}
	}
}))

export default useStyles
