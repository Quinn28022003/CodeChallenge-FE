import { Layout, Spin } from 'antd'
import { Outlet } from 'react-router-dom'

import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import useDarkMode from '~/hook/useDarkMode'
import useLoading from '~/hook/useLoading'
import useStyles from './styles'

const SubLayout = () => {
	const { loading, handleChangeLoading } = useLoading()
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles(darkModeLocalStorage)

	return (
		<Spin spinning={loading}>
			<Layout className={`${styles.SubLayout}`}>
				<div className="container-header">
					<Header className="header" handleChangeLoading={handleChangeLoading} />
					<Navigation />
				</div>
				<div className="container-content">
					<Outlet />
				</div>
			</Layout>
		</Spin>
	)
}

export default SubLayout
