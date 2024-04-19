import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import useStyles from './styles'

const MainLayout = () => {
	const { styles } = useStyles()

	return (
		<Layout className={`${styles.MainLayout}`}>
			<div
				style={{
					position: 'fixed',
					top: '0px',
					right: '0px',
					left: '0px',
					zIndex: 10
				}}
			>
				<Header className="header" />
				<Navigation />
			</div>
			<div
				style={{
					marginTop: '116px'
				}}
			>
				<Outlet />
			</div>
			<Footer />
		</Layout>
	)
}

export default MainLayout
