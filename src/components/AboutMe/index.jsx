import { Space } from 'antd'
import { useEffect, useState } from 'react'

import useCommon from '~/hook/useCommon'
import { cssVars } from '~/theme'
import useStyles from './styles'

const AboutMe = () => {
	const { innerWidth } = useCommon()
	const { darkMode } = useCommon()
	const { styles } = useStyles()

	const [title, setTitle] = useState('headline-3-regular-48px italic text-stroke-2')
	const [description, setDescription] = useState('headline-5-regular-24px italic text-stroke-1')

	useEffect(() => {
		if (innerWidth > 1200) {
			setTitle('headline-3-regular-48px italic text-stroke-2')
			setDescription('headline-5-regular-24px italic text-stroke-1')
		} else if (innerWidth > 992) {
			setTitle('headline-4-regular-34px italic text-stroke-2')
			setDescription('headline-6-medium-20px italic text-stroke-1')
		} else if (innerWidth > 768) {
			setTitle('headline-4-regular-34px italic text-stroke-2')
			setDescription('headline-6-medium-20px italic text-stroke-1')
		} else {
			setTitle('headline-5-regular-24px italic text-stroke-1')
			setDescription('Subtitle1 italic text-stroke-1')
		}
	}, [innerWidth])

	return (
		<div
			className={styles.AboutMe}
			style={{
				backgroundColor: `${darkMode === false ? '' : `${cssVars.colorDark}`}`
			}}
		>
			<Space className="container">
				<img src="/public/assets/images/homePage/pexels-photo-7414036.jpeg" alt="tư-duy" className="logo" />
				<Space className="content">
					<h3 className={`title ${title}`}>Lựa chọn chúng tôi bạn sẽ nâng cao tư duy về lập trình của bạn mỗi ngày</h3>
					<h5 className={`description ${description}`}>
						Dễ dàng nắm bắt các khái niệm phức tạp, khuyến khích sự sáng tạo và tự tin trong việc giải quyết các vấn đề
						kỹ thuật - đó là những gì bạn có thể kỳ vọng khi chọn chúng tôi để nâng cao tư duy về lập trình hàng ngày.
					</h5>
				</Space>
			</Space>
		</div>
	)
}

export default AboutMe
