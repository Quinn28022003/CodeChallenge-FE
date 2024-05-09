import { BellOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Badge, Button, Space } from 'antd'
import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import SwitchComponent from '~/components/Switch'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useNavigation from '~/hook/useNavigation'
import AuthButtons from '../AuthButtons'
import Notification from '../Notification'
import UserMenu from '../UserMenu'
import useStyles from './styles'

const listNotifi = [
	{
		key: '1',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '2',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '3',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '4',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '5',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '6',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '7',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '8',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '9',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '10',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	},
	{
		key: '11',
		url: '/assets/images/test.png',
		description: 'Nguyễn Anh đã chập nhận yêu cầu đánh giá bài của bạn',
		date: '28/02/2024'
	}
]

const Header = ({ handleChangeLoading }) => {
	const { innerWidth, isLoggedIn } = useCommon()
	const { darkModeLocalStorage } = useDarkMode()
	const { showNav, handleChangeShowNav } = useNavigation()
	const { styles } = useStyles(darkModeLocalStorage)
	const [showNotification, setShowNotification] = useState(false)

	const handleOnclickBtnMenu = () => {
		handleChangeShowNav(!showNav)
	}

	const handleChangeShowNotification = () => {
		setShowNotification(!showNotification)
	}

	useEffect(() => {
		const htmlElement = document.documentElement
		if (showNotification === true) {
			htmlElement.style.overflow = 'hidden'
		} else {
			htmlElement.style.overflow = 'auto'
		}
	}, [showNotification])

	return (
		<>
			<div className={styles.Header}>
				<div className="header-container">
					<img src="/assets/images/logo/logo_codeChallenge.png" alt="CodeChallenge" className="logo" />
					{innerWidth > 1024 ? (
						<div className="content-between">
							<SwitchComponent />
						</div>
					) : null}
					<Space className="content-right">
						<Badge count={isLoggedIn === true ? listNotifi.length : 0} size="small">
							<Button
								ghost={darkModeLocalStorage}
								className="hoverButton"
								icon={<BellOutlined />}
								onClick={handleChangeShowNotification}
							/>
						</Badge>

						<Button ghost={darkModeLocalStorage} className="hoverButton" icon={<SearchOutlined />} onClick={() => {}} />
						{innerWidth > 1024 ? (
							<>
								{isLoggedIn === false ? (
									<AuthButtons handleChangeLoading={handleChangeLoading} />
								) : (
									<UserMenu handleChangeLoading={handleChangeLoading} />
								)}
							</>
						) : (
							<Button
								ghost={darkModeLocalStorage}
								className="hoverButton"
								icon={<MenuOutlined />}
								onClick={() => {
									handleOnclickBtnMenu()
								}}
							/>
						)}
					</Space>
					{showNotification === true ? (
						<Notification handleChangeShowNotification={handleChangeShowNotification} listNotifi={listNotifi} />
					) : null}
				</div>
			</div>
		</>
	)
}

Header.propTypes = {
	handleChangeLoading: PropTypes.func.isRequired
}

export default Header
