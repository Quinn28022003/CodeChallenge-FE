import { useRoutes } from 'react-router-dom'

import getRoutesByPermission from './routes'

const App = () => {
	const routes = getRoutesByPermission()
	const routing = useRoutes(routes)

	return routing
}

export default App
