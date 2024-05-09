import { Menu, Space } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import SwitchComponent from '~/components/Switch'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useLoading from '~/hook/useLoading'
import useNavigation from '~/hook/useNavigation'
import AuthButtons from '../AuthButtons'
import UserMenu from '../UserMenu'
import useStyles from './styles'

const Navigation = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { handleChangeLoading } = useLoading()
	const { showNav } = useNavigation()
	const { innerWidth, isLoggedIn } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		showNav
	})
	const [currentMenuKey, setCurrentMenuKey] = useState('')
	const location = useLocation()
	const [items] = useState([
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
	])

	useEffect(() => {
		const newMenuKey = items.find(item => item.path === location.pathname)?.key || ''
		setCurrentMenuKey(newMenuKey)
	}, [items, location.pathname])

	useEffect(() => {
		const htmlElement = document.documentElement
		if (showNav === true && innerWidth < 1024) {
			htmlElement.style.overflow = 'hidden'
		} else {
			htmlElement.style.overflow = 'auto'
		}
	}, [showNav, innerWidth])

	return (
		<Space className={`${styles.Navigation}`}>
			{showNav === true ? (
				<div className="container">
					<div className="switch">
						<SwitchComponent />
					</div>
					{isLoggedIn === false ? <AuthButtons handleChangeLoading={handleChangeLoading} /> : <UserMenu />}
				</div>
			) : null}
			<Menu
				className="menu"
				theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
				selectedKeys={[currentMenuKey]}
				mode={`${showNav === false ? 'horizontal' : 'inline'}`}
				items={items}
			/>
		</Space>
	)
}

export default Navigation
