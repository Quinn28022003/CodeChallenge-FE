import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	Register: {
		...tw`bg-gradient-to-br from-emerald-200 from-10%  to-emerald-500 to-90% h-[100vh] flex justify-center p-[20px] overflow-x-auto`,
		...tw`max-xs:merge-[ p-[10px] ]`,
		'.container': {
			...tw`text-center`,
			'.come-back': {
				...tw`text-black no-underline m-[10px 0px] opacity-70`,
				'&:hover': {
					...tw`opacity-100`
				},
				'.icon': {
					...tw`mr-1`
				}
			},
			'.image': {
				...tw`w-[200px] h-[120px] m-[20px auto]`
			},
			'.form-container': {
				...tw`m-[0px auto] block`,
				'.title': {
					...tw`text-white font-extrabold font-sans text-center mb-[40px]`,
					textShadow: '2px 2px #939393',
					...tw`max-lg:merge-[ decoration-1 mb-[20px] ]`
				},
				'.form': {
					...tw``,
					'.container': {
						...tw`flex justify-center items-center`,
						...tw`max-lg:merge-[ block ]`,
						'.content-1': {
							...tw`block m-[10px]`
						},
						'.content-2': {
							...tw`block m-[10px]`,
							'.datePicker': {
								...tw`w-full`
							}
						}
					},
					'.item': {
						...tw`w-[400px]`,
						...tw`max-lg:merge-[ w-full ]`,
						'.input': {
							...tw``
						}
					},
					'.links-container': {
						...tw`flex justify-between items-center m-[20px 0px] p-[10px]`,
						...tw`max-lg:merge-[ grid gap-4 ]`,
						'.text': {
							...tw`underline text-black`
						}
					},
					'.btn': {
						...tw`mb-[40px]`
					}
				}
			}
		}
	}
})

export default useStyles
