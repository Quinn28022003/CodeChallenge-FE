import { CloseOutlined } from '@ant-design/icons'
import { Button, Empty } from 'antd'
import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { deleteNotification, getNotification } from '~/api/Notification/notification'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import ItemNotification from './item'
import useStyles from './styles'

const Notification = ({ handleChangeShowNotification, userInfo }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { innerWidth, isLoggedIn, handleGetUserDetail } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const [title, setTitle] = useState(fontStyles['headline-4-regular-34px'])
	const [list, setList] = useState([])
	const handleDeleteNotification = async id => {
		try {
			const res = await deleteNotification(id)
			if (res.data.deletedCount !== 0) {
				if (userInfo._id) {
					handleGetUserDetail(userInfo._id)
					toast.success('Deleted')
				}
			}
		} catch (error) {
			console.log('error: ', error)
			toast.error('error when calling api')
		}
	}

	useEffect(() => {
		if (userInfo._id) {
			;(async () => {
				try {
					const data = await getNotification(userInfo._id)
					setList(data)
				} catch (e) {
					console.log('Error: ', e)
				}
			})()
		}
	}, [userInfo])

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
					<span
						className={`quantity ${fontStyles.caption}`}
					>{`${isLoggedIn === true ? (userInfo?.notifications?.length > 0 ? userInfo?.notifications?.length : 0) : 0} new`}</span>
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
						list && list.length > 0 ? (
							list.map(element => (
								<li className="item" key={element._id}>
									<ItemNotification
										url={element.sender.imagePath}
										description={element.title}
										date={element.createdAt}
										path={element.path}
										id={element._id}
										element={element}
										handleDeleteNotification={handleDeleteNotification}
									/>
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
	userInfo: PropTypes.object.isRequired
}

export default Notification
