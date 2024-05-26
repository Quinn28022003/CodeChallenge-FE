import { CopyOutlined, EditOutlined, ProfileOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const Account = () => {
	const { innerWidth } = useCommon()
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const [currentMenuKey, setCurrentMenuKey] = useState('')
	const location = useLocation()
	const [items] = useState([
		{
			key: 'profile',
			label: <Link to="/account">Hồ sơ</Link>,
			path: '/account',
			icon: <ProfileOutlined />
		},
		{
			key: 'response',
			label: <Link to="/account/response">Phản hồi</Link>,
			path: '/account/response',
			icon: <CopyOutlined />
		},
		{
			key: 'edit',
			label: <Link to="/account/edit">Chỉnh sửa</Link>,
			path: '/account/edit',
			icon: <EditOutlined />
		}
	])

	useEffect(() => {
		const newMenuKey = items.find(item => item.path === location.pathname)?.key || ''
		setCurrentMenuKey(newMenuKey)
	}, [items, location.pathname])

	return (
		<div className={`${styles.Account}`}>
			<Menu
				className="menu-account"
				theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
				selectedKeys={[currentMenuKey]}
				mode="horizontal"
				items={items}
			/>
			<Outlet />
		</div>
	)
}

export default Account
