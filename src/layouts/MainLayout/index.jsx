import { Outlet } from 'react-router-dom'

const MainLayout = () => (
	<div>
		<div>header</div>
		<div>
			<Outlet />
		</div>
		<div>footer</div>
	</div>
)

export default MainLayout
