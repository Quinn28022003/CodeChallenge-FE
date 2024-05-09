import { useRoutes } from 'react-router-dom'

import { Spin } from 'antd'
import RestoreLogin from '~/helpers/auth.jsx'
import useCommon from '~/hook/useCommon'
import useLoading from '~/hook/useLoading'
import getRoutesByPermission from './routes'

const App = () => {
	const { loading, handleChangeLoading } = useLoading()
	const { permission } = useCommon()

	RestoreLogin(handleChangeLoading)

	const routes = getRoutesByPermission(permission)
	const routing = useRoutes(routes)

	return <Spin spinning={loading}>{routing}</Spin>
}

export default App
