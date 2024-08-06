import {
	CopyOutlined,
	EditOutlined,
	LoginOutlined,
	ProductOutlined,
	ProfileOutlined,
	UserOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import globalSocket from '~/common/GlobalSocket'
import { Role } from '~/constants/role'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const UserMenu = ({ handleChangeLoading, userInfo = {} }) => {
	const { handleChangeIsLoggedIn, handleChangePermission, handleChangeUserInfo } = useCommon()

	const [items, setItems] = useState([])
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles(darkModeLocalStorage)

	useEffect(() => {
		if (userInfo.role === 'admin') {
			setItems([
				{
					label: `${Object.keys(userInfo).length !== 0 ? userInfo.lastName + ' ' + userInfo.firstName : '...'}`,
					key: 'mail',
					icon: <UserOutlined />,
					children: [
						{
							key: 'profile',
							label: 'Hồ sơ',
							icon: <ProfileOutlined />
						},
						{
							key: 'manage',
							label: 'Quản lý',
							icon: <ProductOutlined />
						},
						{
							key: 'see-request',
							label: 'Xem yêu cầu',
							icon: <CopyOutlined />
						},
						{
							key: 'edit',
							label: 'Chỉnh sửa',
							icon: <EditOutlined />
						},
						{
							key: 'logout',
							label: 'Đăng xuất',
							icon: <LoginOutlined />
						}
					]
				}
			])
		} else {
			setItems([
				{
					label: `${Object.keys(userInfo).length !== 0 ? userInfo.lastName + ' ' + userInfo.firstName : '...'}`,
					key: 'mail',
					icon: <UserOutlined />,
					children: [
						{
							key: 'profile',
							label: 'Hồ sơ',
							icon: <ProfileOutlined />
						},
						{
							key: 'see-request',
							label: 'Xem yêu cầu',
							icon: <CopyOutlined />
						},
						{
							key: 'edit',
							label: 'Chỉnh sửa',
							icon: <EditOutlined />
						},
						{
							key: 'logout',
							label: 'Đăng xuất',
							icon: <LoginOutlined />
						}
					]
				}
			])
		}
	}, [userInfo])

	const onClick = e => {
		switch (e.key) {
			case 'profile': {
				handleChangeLoading('/account', 500)
				break
			}

			case 'manage': {
				handleChangeLoading('/manage', 500)
				break
			}

			case 'see-request': {
				handleChangeLoading('/see-request', 500)
				break
			}

			case 'edit': {
				handleChangeLoading('/account/edit', 500)
				break
			}

			case 'logout': {
				Cookies.remove('accessToken')
				handleChangeIsLoggedIn(false)
				handleChangeLoading('/', 500)
				handleChangePermission(Role.NORMAL)
				handleChangeUserInfo({})
				setTimeout(() => {
					location.reload()
				}, 3000)
				;(async () => {
					const socket = await globalSocket(import.meta.env.VITE_SERVER)
					socket.emit('logout-connection')

					const logoutConnectionListener = message => {
						console.log('Received message from server:', message)
						socket.off('logout-connection', logoutConnectionListener)
					}

					socket.on('logout-connection', logoutConnectionListener)
				})()

				break
			}
		}
	}

	return (
		<div className={`${styles.UserMenu}`}>
			<Menu
				theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
				className="menu"
				selectedKeys={'quinn'}
				onClick={onClick}
				mode="horizontal"
				items={items}
			/>
		</div>
	)
}

UserMenu.propTypes = {
	handleChangeLoading: PropTypes.func.isRequired,
	userInfo: PropTypes.object
}

export default UserMenu
