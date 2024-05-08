import { Layout, Spin } from 'antd'
import { Outlet } from 'react-router-dom'

import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import Subscription from '~/components/Subscription'
import useDarkMode from '~/hook/useDarkMode'
import useLoading from '~/hook/useLoading'
import useStyles from './styles'

const MainLayout = () => {
	const { loading, handleChangeLoading } = useLoading()
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles(darkModeLocalStorage)
	return (
		<Spin spinning={loading}>
			<Layout className={`${styles.MainLayout}`}>
				<div className="container-header">
					<Header className="header" handleChangeLoading={handleChangeLoading} />
					<Navigation />
				</div>
				<div className="container-content">
					<Outlet />
				</div>
				<Subscription />
				<Footer />
			</Layout>
		</Spin>
	)
}

export default MainLayout
