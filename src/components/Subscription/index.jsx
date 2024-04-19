import { useEffect, useState } from 'react'

import { Button, Input, Space } from 'antd'
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
		<div className={`${styles.Subscription}`}>
			<Space className="content">
				<h2 className={`title ${title}`}>Đăng ký nhận thông báo nhắc nhở ôn tập</h2>
				<h5 className={`description ${description}`}>
					Khi bạn sử dụng tính năng này thì nó sẽ được thông báo đến tài khoản của bạn và email để nhắc nhở bạn ôn tập
					mỗi ngày.
				</h5>
				<Space className="submit">
					<Input placeholder="Nhập email vào đây" size="large" />
					<Button type="primary" className="BUTTON" size="large">
						Đăng ký
					</Button>
				</Space>
			</Space>
		</div>
	)
}

export default Introduction
