import { useEffect, useState } from 'react'

import { fontStyles } from '~/constants/fontStyles'
import useCommon from './useCommon'

const useText = () => {
	const { innerWidth } = useCommon()

	const [title, setTitle] = useState(`${fontStyles['headline-3-regular-48px.italic']} ${fontStyles['text-stroke-2']}`)
	const [description, setDescription] = useState(
		`${fontStyles['headline-5-regular-24px.italic']} ${fontStyles['text-stroke-1']}`
	)

	useEffect(() => {
		if (innerWidth > 1200) {
			setTitle(`${fontStyles['headline-3-regular-48px.italic']} ${fontStyles['text-stroke-2']}`)
			setDescription(`${fontStyles['headline-5-regular-24px.italic']} ${fontStyles['text-stroke-1']}`)
		} else if (innerWidth < 1200 && innerWidth > 992) {
			setTitle(`${fontStyles['headline-4-regular-34px.italic']} ${fontStyles['text-stroke-2']}`)
			setDescription(`${fontStyles['headline-6-medium-20px.italic']} ${fontStyles['text-stroke-1']}`)
		} else if (innerWidth < 992 && innerWidth > 768) {
			setTitle(`${fontStyles['headline-5-regular-24px.italic']} ${fontStyles['text-stroke-1']}`)
			setDescription(`${fontStyles['subtitle-1.italic']} ${fontStyles['text-stroke-1']}`)
		} else {
			setTitle(`${fontStyles['headline-5-regular-24px.italic']} ${fontStyles['text-stroke-1']}`)
			setDescription(`${fontStyles['subtitle-1.italic']} ${fontStyles['text-stroke-1']}`)
		}
	}, [innerWidth])

	return {
		title,
		description
	}
}

export default useText
