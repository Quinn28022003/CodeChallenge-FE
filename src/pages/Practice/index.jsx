import { Col, Menu, Row, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import Script from '~/components/Script'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useLoading from '~/hook/useLoading'
import useStyles from './styles'

const Practice = () => {
	const { loading, handleChangeLoading } = useLoading()
	const { innerWidth } = useCommon()
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const [currentMenuKey, setCurrentMenuKey] = useState('')
	const location = useLocation()
	useEffect(() => {
		console.log(darkModeLocalStorage)
	})
	const [items] = useState([
		{
			key: 'topic',
			label: <Link to="/practice">Đề bài</Link>,
			path: '/practice'
		},
		{
			key: 'submit',
			label: <Link to="/practice/submit">Nộp bài</Link>,
			path: '/practice/submit'
		},
		{
			key: 'discuss',
			label: <Link to="/practice/discuss">Bàn luận</Link>,
			path: '/practice/discuss'
		},
		{
			key: 'solution',
			label: <Link to="/practice/solutions">Các giải pháp</Link>,
			path: '/practice/solutions'
		}
	])

	useEffect(() => {
		const newMenuKey = items.find(item => item.path === location.pathname)?.key || ''
		setCurrentMenuKey(newMenuKey)
	}, [items, location.pathname])

	return (
		<Spin spinning={loading}>
			<div className={`${styles.Practice}`}>
				<div className="container-header">
					<Header className="header" handleChangeLoading={handleChangeLoading} />
					<Navigation />
				</div>
				<Row className="row">
					<Col className="col" sm={24} md={11}>
						<Outlet />
						<Menu
							className="menu-practice"
							theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
							selectedKeys={[currentMenuKey]}
							mode="horizontal"
							items={items}
						/>
					</Col>
					<Col className="col" sm={24} md={11}>
						<div className="container-script">
							<Script />
						</div>
					</Col>
				</Row>
			</div>
		</Spin>
	)
}

export default Practice
