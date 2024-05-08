import { createStyles } from 'antd-style'
import tw from 'twin.macro'

const useStyles = createStyles((_, { innerWidth }) => ({
	ChallengePage: {
		...tw`p-[60px] bg-[url('/assets/images/anh-nen-mau-xanh-la-cay-cho-may-tinh_032128304.jpg')] bg-cover bg-center max-w-[1920px] m-[0px auto]`,
		...tw`max-sm:merge-[ p-[20px 10px] ]`,
		'.container': {
			...tw``,
			'.content-text': {
				...tw`text-center`,
				'.title': {
					...tw`text-white font-extrabold font-sans`
				},
				'.description': {
					...tw`text-white font-extrabold font-sans m-[10px auto] max-w-[800px]`
				}
			},
			'.content': {
				...tw``,
				'.topics': {
					...tw`flex`,
					'.list-topics': {
						...tw`flex-wrap overflow-hidden`
					},
					'.btn': {
						...tw`p-[0px 20px]`
					}
				},
				'.content-select-challenge': {
					...tw`flex gap-4 mt-5 justify-between`,
					...tw`max-md:merge-[ block ]`,
					'.select': {
						...tw`mb-5`,
						'.btn': {
							...(innerWidth < 768
								? {
										...tw`block w-full`
									}
								: {
										...tw`hidden`
									})
						},
						'.menu': {
							...tw`rounded-[8px] w-[400px]`,
							...tw`max-2xl:merge-[ w-[200px] ]`,
							...tw`max-md:merge-[ w-full ]`
						}
					},
					'.challenge': {
						...tw`overflow-hidden`,
						'.header': {
							...tw``,
							'.filter-container': {
								...tw`bg-white rounded-[8px] p-[10px 10px 0px 10px]`,
								'.btn': {
									...tw`m-[0px 10px 10px 0px]`
								}
							},
							'.input': {
								...tw`m-[20px 0px]`
							}
						}
					}
				}
			}
		}
	}
}))

export default useStyles
