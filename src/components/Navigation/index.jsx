import { Menu, Space } from 'antd'
import { useTheme } from 'antd-style'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import SwitchComponent from '~/components/Switch'
import useCommon from '~/hook/useCommon'
import useNavigation from '~/hook/useNavigation'
import useStyles from './styles'

const Navigation = () => {
	const { styles } = useStyles()
	const { darkMode, innerWidth } = useCommon()
	const { showNav } = useNavigation()
	const [currentMenuKey, setCurrentMenuKey] = useState('')
	const location = useLocation()
	const theme = useTheme()
	const items = [
		{
			key: 'home',
			label: <Link to="/">Trang chủ</Link>,
			path: '/'
		},
		{
			key: 'reviewer',
			label: <Link to="/reviewer">Reviewer</Link>,
			path: '/reviewer'
		},
		{
			key: 'challenge',
			label: <Link to="/challenge">Thử thách</Link>,
			path: '/challenge'
		},
		{
			key: 'chat',
			label: <Link to="/chat">Trò chuyện</Link>,
			path: '/chat'
		},
		{
			key: 'seerequest',
			label: <Link to="/see-request">Xem yêu cầu</Link>,
			path: '/see-request'
		}
	]

	const [darkModeLocalStorage, setDarkModeLocalStorage] = useState(() => {
		const storedDarkMode = localStorage.getItem('darkMode')
		return storedDarkMode ? JSON.parse(storedDarkMode) : false
	})

	useEffect(() => {
		const storedDarkMode = localStorage.getItem('darkMode')
		setDarkModeLocalStorage(storedDarkMode ? JSON.parse(storedDarkMode) : false)
	}, [darkMode])

	useEffect(() => {
		const newMenuKey = items.find(item => item.path === location.pathname)?.key || 'home'
		setCurrentMenuKey(newMenuKey)
	}, [items, location.pathname])

	useEffect(() => {
		const htmlElement = document.documentElement
		if (showNav === true && innerWidth < 1024) {
			htmlElement.style.overflow = 'hidden'
		} else {
			htmlElement.style.overflow = 'auto'
		}
	}, [showNav])

	return (
		<Space
			className={`${styles.Navigation}`}
			style={{
				position: `${showNav === false ? '' : 'fixed'}`,
				backgroundColor: `${darkModeLocalStorage === false ? '' : `${theme.cssVars.colorDark}`}`
			}}
		>
			{showNav === true ? (
				<div className="switch-container">
					<SwitchComponent />
				</div>
			) : null}
			<Menu
				className="menu"
				theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
				selectedKeys={[currentMenuKey]}
				mode={`${showNav === false ? 'horizontal' : 'inline'}`}
				items={items}
				style={{
					backgroundColor: `${darkModeLocalStorage === false ? '' : `${theme.cssVars.colorDark}`}`
				}}
			/>
		</Space>
	)
}

export default Navigation
