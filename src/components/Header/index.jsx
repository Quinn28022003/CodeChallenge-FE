import { BellOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import { useTheme } from 'antd-style'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import SwitchComponent from '~/components/Switch'
import useCommon from '~/hook/useCommon'
import useNavigation from '~/hook/useNavigation'
import useStyles from './styles'

const Header = () => {
	const { darkMode, innerWidth } = useCommon()
	const { showNav, handleChangeShowNav } = useNavigation()
	const { styles } = useStyles()
	const theme = useTheme()
	const [darkModeLocalStorage, setDarkModeLocalStorage] = useState(() => {
		const storedDarkMode = localStorage.getItem('darkMode')
		return storedDarkMode ? JSON.parse(storedDarkMode) : false
	})

	useEffect(() => {
		const storedDarkMode = localStorage.getItem('darkMode')
		setDarkModeLocalStorage(storedDarkMode ? JSON.parse(storedDarkMode) : false)
	}, [darkMode])

	const handleOnclickBtnMenu = () => {
		handleChangeShowNav(!showNav)
	}

	return (
		<>
			<div
				className={styles.Header}
				style={{
					backgroundColor: `${darkModeLocalStorage === false ? '' : `${theme.cssVars.colorDark}`}`
				}}
			>
				<div className="header-container">
					<img src="/assets/images/logo_codeChallenge.png" alt="CodeChallenge" className="logo" />
					{innerWidth > 1024 ? (
						<div className="content-between">
							<SwitchComponent />
						</div>
					) : null}
					<Space className="content-right">
						<Button ghost={darkModeLocalStorage} className="hoverButton" icon={<BellOutlined />} onClick={() => {}} />
						<Button ghost={darkModeLocalStorage} className="hoverButton" icon={<SearchOutlined />} onClick={() => {}} />
						{innerWidth > 1024 ? (
							<>
								<Link to={'/register'}>
									<Button ghost={darkModeLocalStorage} className="hoverButton" onClick={() => {}}>
										Đăng ký
									</Button>
								</Link>
								<div className="line" />
								<Link to={'/login'}>
									<Button ghost={darkModeLocalStorage} className="hoverButton" onClick={() => {}}>
										Đăng nhập
									</Button>
								</Link>
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
				</div>
			</div>
		</>
	)
}

export default Header
