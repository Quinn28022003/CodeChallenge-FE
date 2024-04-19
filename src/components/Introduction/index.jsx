import { Button, Space } from 'antd'
import { useEffect, useState } from 'react'

import useCommon from '~/hook/useCommon'
import useStyles from './styles'

const Introduction = () => {
	const { innerWidth } = useCommon()
	const { styles } = useStyles()

	const [title, setTitle] = useState('headline-2-light-60px italic text-stroke-2')
	const [description, setDescription] = useState('headline-5-regular-24px italic text-stroke-1')

	useEffect(() => {
		if (innerWidth > 1200) {
			setTitle('headline-2-light-60px italic text-stroke-2')
			setDescription('headline-5-regular-24px italic text-stroke-1')
		} else if (innerWidth > 992) {
			setTitle('headline-3-regular-48px italic text-stroke-2')
			setDescription('headline-6-medium-20px italic text-stroke-1')
		} else if (innerWidth > 768) {
			setTitle('headline-4-regular-34px italic text-stroke-1')
			setDescription('headline-6-medium-20px italic text-stroke-1')
		} else {
			setTitle('headline-5-regular-24px italic text-stroke-1')
			setDescription('Subtitle1 italic text-stroke-1')
		}
	}, [innerWidth])

	return (
		<div className={`${styles.Introduction}`}>
			<div className="coating">
				<img src="/assets/images/girl-reading-book.png" alt="image-girl" className="image-girl" />
				<Space className="content">
					<h2 className={`title ${title}`}>Chào mừng bạn đến với Code Challenge</h2>
					<h5 className={`description ${description}`}>
						Nếu bạn chưa có tài khoản thì hay đăng ký ngay chỉ sau vài bước bạn đã có 1 tài khoản miễn phí.
					</h5>
					<Button className="btn BUTTON" type="primary">
						Đăng ký miễn phí
					</Button>
				</Space>
			</div>
		</div>
	)
}

export default Introduction
