import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { darkModeLocalStorage, showResponse }) => ({
	ItemResponse: {
		...tw`mb-[20px] pr-[10px]`,
		'.item-one': {
			...tw`flex justify-between items-center gap-4`,
			...tw`max-lg:merge-[ px-[40px] ]`,
			...tw`max-sm:merge-[ justify-center flex-wrap p-0 ]`,
			'.stt': {
				...(darkModeLocalStorage === true
					? {
							...tw`text-white`
						}
					: {})
			},
			'.image': {
				...tw` rounded-full w-[50px] h-[50px]`,
				...tw`max-xs:merge-[ w-[30px] h-[30px] ]`
			},
			'.': {
				...tw`min-w-[100px]`,
				...tw`max-lg:merge-[ w-[180px] ]`,
				...tw`max-xs:merge-[ w-[120px] ]`,
				...(darkModeLocalStorage === true
					? {
							...tw`text-white`
						}
					: {}),
				whiteSpace: 'nowrap',
				overflow: 'hidden',
				textOverflow: 'ellipsis'
			},
			'.title': {
				...(darkModeLocalStorage === true
					? {
							...tw`text-white`
						}
					: {})
			},
			'.date': {
				...tw``,
				...(darkModeLocalStorage === true
					? {
							...tw`text-white`
						}
					: {})
			},
			'.container-btn': {
				...tw` flex justify-center items-center gap-4`,
				'.btn': {
					...tw``
				}
			}
		},
		'.item-two': {
			...tw`m-[10px 20px 30px 20px]`,
			...(showResponse === false
				? {
						...tw`hidden`
					}
				: {
						...tw`block`
					}),
			'.title': {
				...tw`m-[6px 0px]`,
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`text-white`
						})
			},
			'.description': {
				...(darkModeLocalStorage === false
					? {}
					: {
							...tw`text-white`
						})
			},
			'.file': {
				...tw`mb-[20px]`,
				'.name': {
					...tw`mr-[20px]`,
					...(darkModeLocalStorage === false
						? {}
						: {
								...tw`text-white`
							})
				}
			}
		}
	}
}))

export default useStyles
