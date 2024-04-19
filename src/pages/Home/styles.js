import { createStyles } from 'antd-style'
import tw from 'twin.macro'

import { cssVars } from '~/theme'

const useStyles = createStyles({
	Home: {
		...tw`bg-white h-[2000px]`,
		'.introdution': {
			...tw`bg-[url('/assets/images/backgroud-introdution.jpg')] h-[80vh] bg-cover bg-center `,
			'.coating': {
				...tw`bg-[rgba(31,41,55,0.8)] h-full flex justify-center items-center p-[0px 60px]`,
				'.image-girl': {
					...tw``
				},
				'.content': {
					...tw`block max-w-[820px]`,
					'.title': {
						...tw`text-white font-extrabold font-sans`,
						WebkitTextStroke: `2px ${cssVars.colorPrimary}`
					},
					'.description': {
						...tw`text-white font-extrabold font-sans m-[10px 0px]`,
						WebkitTextStroke: `1px ${cssVars.colorPrimary}`
					},
					'.btn': {
						...tw``
					}
				}
			}
		}
	}
})

export default useStyles
