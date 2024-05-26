import { BellOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Badge, Button, Space } from 'antd'
import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import SwitchComponent from '~/components/Switch'
import useCommon from '~/hook/useCommon'
import useConvertData from '~/hook/useConvertData'
import useDarkMode from '~/hook/useDarkMode'
import useNavigation from '~/hook/useNavigation'
import AuthButtons from '../AuthButtons'
import Notification from '../Notification'
import UserMenu from '../UserMenu'
import useStyles from './styles'

const Header = ({ handleChangeLoading }) => {
	const { userInfo, innerWidth, isLoggedIn } = useCommon()
	const { darkModeLocalStorage } = useDarkMode()
	const { showNav, handleChangeShowNav } = useNavigation()
	const { styles } = useStyles(darkModeLocalStorage)
	const [showNotification, setShowNotification] = useState(false)
	const { dataUser } = useConvertData({
		userInfo
	})
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
						<Badge
							count={
								isLoggedIn === true ? (dataUser?.notifications?.length > 0 ? dataUser?.notifications?.length : 0) : 0
							}
							size="small"
						>
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
									<UserMenu handleChangeLoading={handleChangeLoading} userInfo={dataUser} />
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
						<Notification handleChangeShowNotification={handleChangeShowNotification} userInfo={dataUser} />
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
