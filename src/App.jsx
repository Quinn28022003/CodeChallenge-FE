import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import { toast } from 'react-toastify'
import globalSocket from '~/common/GlobalSocket'
import RestoreLogin from '~/helpers/Auth'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import { decrypt } from '~/utils/decrypt'
import { throttle } from '~/utils/throttle'
import getRoutesByPermission from './routes'

const App = () => {
	const socket = globalSocket(import.meta.env.VITE_SERVER)
	const {
		userInfo,
		permission,
		handleChangeIsLoggedIn,
		handleChangePermission,
		handleChangeUserInfo,
		handleGetUserDetail
	} = useCommon()
	const { darkModeLocalStorage } = useDarkMode()

	useEffect(() => {
		if (Object.keys(userInfo).length !== 0) {
			const user = decrypt(userInfo, import.meta.env.VITE_SECRET_DATA)

			if (socket) {
				socket.on('connect', () => {
					console.log('id socket: ', socket.id)
					console.log('Connected')
				})

				const throttledHandleGetUserDetail = throttle(() => handleGetUserDetail(user._id), 5000)

				socket.on('notification', message => {
					toast.success(message)
					throttledHandleGetUserDetail()
				})

				socket.on('error', message => {
					toast.error(message)
					toast.error('Please log in again')
					Cookies.remove('accessToken')
					handleChangeIsLoggedIn(false)
					handleChangePermission('normal')
					handleChangeUserInfo({})
				})

				socket.on('data', ({ user, accessToken, isLoggedIn }) => {
					if (accessToken) {
						Cookies.set('accessToken', accessToken)
					}
					handleChangeIsLoggedIn(isLoggedIn)
				})

				socket.on('disconnect', () => {
					console.log('Disconnected')
				})

				return () => {
					socket.off('notification')
					socket.off('error')
					socket.off('data')
					socket.off('disconnect')
				}
			}
		}
	}, [socket, userInfo, handleGetUserDetail, handleChangeIsLoggedIn, handleChangePermission, handleChangeUserInfo])

	useEffect(() => {
		const htmlElement = document.documentElement
		if (darkModeLocalStorage === false) {
			htmlElement.style.backgroundColor = 'white'
		} else {
			htmlElement.style.backgroundColor = '#243040'
		}
	}, [darkModeLocalStorage])

	RestoreLogin()

	const routes = getRoutesByPermission(permission)
	const routing = useRoutes(routes)

	return routing
}

export default App
