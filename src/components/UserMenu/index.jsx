import { CopyOutlined, EditOutlined, LoginOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const UserMenu = ({ handleChangeLoading }) => {
	const { userInfo, handleChangeIsLoggedIn, handleChangePermission, handleChangeUserInfo } = useCommon()

	const [items, setItems] = useState([
		{
			label: `${userInfo.firstName} ${userInfo.lastName}`,
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
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles(darkModeLocalStorage)

	useEffect(() => {
		setItems([
			{
				label: `${userInfo.firstName} ${userInfo.lastName}`,
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
	}, [userInfo])

	const onClick = e => {
		switch (e.key) {
			case 'profile': {
				break
			}

			case 'see-request': {
				break
			}

			case 'edit': {
				break
			}

			case 'logout': {
				Cookies.remove('accessToken')
				handleChangeIsLoggedIn(false)
				handleChangeLoading('/', 500)
				handleChangePermission('normal')
				handleChangeUserInfo({})
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
	handleChangeLoading: PropTypes.func.isRequired
}

export default UserMenu
