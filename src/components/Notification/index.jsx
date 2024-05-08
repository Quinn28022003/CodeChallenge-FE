import { CloseOutlined } from '@ant-design/icons'
import { Button, Empty } from 'antd'
import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import ItemNotification from './item'
import useStyles from './styles'

const Notification = ({ handleChangeShowNotification, listNotifi }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { innerWidth, isLoggedIn } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const [title, setTitle] = useState(fontStyles['headline-4-regular-34px'])

	useEffect(() => {
		if (innerWidth > 768) {
			setTitle(fontStyles['headline-4-regular-34px'])
		} else if (innerWidth < 768 && innerWidth > 576) {
			setTitle(fontStyles['headline-5-regular-24px'])
		} else {
			setTitle(fontStyles['headline-6-medium-20px'])
		}
	}, [title, innerWidth])

	return (
		<div className={`${styles.Notification}`}>
			<div className="content">
				<header className="header-notifi">
					<span className={`quantity ${fontStyles.caption}`}>{`${listNotifi.length} new`}</span>
					<h4 className={`title ${title}`}>Thông báo</h4>
					<Button
						className={`btn-close ${fontStyles.button}`}
						size="large"
						icon={<CloseOutlined />}
						onClick={handleChangeShowNotification}
						type={`${darkModeLocalStorage === true ? 'primary' : ''}`}
					/>
				</header>
				<ul className="list">
					{isLoggedIn ? (
						listNotifi && listNotifi.length > 0 ? (
							listNotifi.map((element, index) => (
								<li className="item" key={element.key}>
									<ItemNotification url={element.url} description={element.description} date={element.date} />
								</li>
							))
						) : (
							<Empty className="empty" />
						)
					) : (
						<Empty className="empty" />
					)}
				</ul>
			</div>
		</div>
	)
}

Notification.propTypes = {
	handleChangeShowNotification: PropTypes.func.isRequired,
	listNotifi: PropTypes.array.isRequired
}

export default Notification
