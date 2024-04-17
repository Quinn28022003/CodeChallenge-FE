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
			<Header className="header" />
			<Navigation />
			<Outlet />
			<Footer />
		</Layout>
	)
}

export default MainLayout
