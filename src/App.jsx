import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'

import socketService from '~/helpers/SocketService'
import RestoreLogin from '~/helpers/auth'
import useCommon from '~/hook/useCommon'
import getRoutesByPermission from './routes'

const App = () => {
	const { permission } = useCommon()

	useEffect(() => {
		socketService.connect()

		return () => {
			socketService.disconnect()
		}
	}, [])

	RestoreLogin()

	const routes = getRoutesByPermission(permission)
	const routing = useRoutes(routes)

	return routing
}

export default App
