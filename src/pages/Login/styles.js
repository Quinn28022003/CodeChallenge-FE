import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles({
	Login: {
		...tw`bg-gradient-to-br from-emerald-200 from-10%  to-emerald-500 to-90% h-[100vh] flex justify-center items-center`,
		'.container': {
			...tw`inline-grid text-center m-[20px]`,
			'.come-back': {
				...tw`text-black no-underline m-[10px 0px] opacity-70`,
				'&:hover': {
					...tw`opacity-100 cursor-pointer`
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
					...tw`max-lg:merge-[ decoration-1 ]`,
					...tw`max-xs:merge-[ mb-[20px] ]`
				},
				'.form': {
					...tw``,
					'.item': {
						...tw`w-[400px]`,
						...tw`max-sm:merge-[ w-[300px] ]`,
						...tw`max-xs:merge-[ w-[260px] ]`,
						'.input': {
							...tw``
						}
					},
					'.links-container': {
						...tw`flex justify-between items-center m-[20px 0px]`,
						'.text': {
							...tw`underline text-black`
						}
					}
				}
			}
		}
	}
})

export default useStyles
