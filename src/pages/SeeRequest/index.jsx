import { CheckOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Col, Menu, Row, Table } from 'antd'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { getRequestUser } from '~/api/Request/request'
import { getListReviewer } from '~/api/Reviewer/reviewer'
import Information from '~/components/Information'
import { fontStyles } from '~/constants/fontStyles'
import useCallApiList from '~/hook/useCallApiList'
import useCommon from '~/hook/useCommon'
import useConvertData from '~/hook/useConvertData'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const SeeRequest = () => {
	const { innerWidth, userInfo } = useCommon()
	const { dataUser } = useConvertData({
		userInfo
	})
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		innerWidth,
		darkModeLocalStorage
	})
	const [current, setCurrent] = useState('awaitingApproval')
	const [items] = useState([
		{
			key: 'awaitingApproval',
			label: 'Đang chờ duyệt'
		},
		{
			key: 'approved',
			label: 'Đã duyệt'
		},
		{
			key: 'refused',
			label: 'Đã từ chối'
		}
	])
	const [dataRequest, setDataRequest] = useState()

	const columns = [
		{
			title: 'STT',
			dataIndex: 'key',
			key: 'key',
			sorter: (a, b) => a.key - b.key
		},
		{
			title: 'Ảnh',
			dataIndex: 'image',
			key: 'image',
			render: url => <img className="image" src={`data:image/png;base64,${url}`} alt="" />
		},
		{
			title: 'Họ tên',
			dataIndex: 'name',
			key: 'name'
		},
		{
			title: 'Tiêu Đề',
			dataIndex: 'title',
			key: 'title',
			render: (text, record) => <Link to={`/practice/${record.key}`}>{text}</Link>,
			sorter: (a, b) => a.title.localeCompare(b.title)
		},
		{
			title: 'Mô tả',
			dataIndex: 'description',
			key: 'description',
			render: description => <p className="description">{description}</p>
		},
		{
			title: 'Trạng thái',
			dataIndex: 'status',
			key: 'status'
		},
		{
			title: 'Hiển thị',
			dataIndex: 'visibility',
			key: 'visibility'
		},
		{
			title: 'Ngày nhận',
			dataIndex: 'date',
			key: 'date'
		},
		{
			title: 'Chấp thuận',
			dataIndex: 'acceptance',
			key: 'acceptance',
			render: () => (
				<Button type={`${darkModeLocalStorage === false ? '' : 'primary'}`}>
					<CheckOutlined />
				</Button>
			)
		},
		{
			title: 'Từ chối',
			dataIndex: 'refuse',
			key: 'refuse',
			render: () => (
				<Button type={`${darkModeLocalStorage === false ? '' : 'primary'}`}>
					<DeleteOutlined />
				</Button>
			)
		}
	]

	useEffect(() => {
		;(async () => {
			if (dataUser?._id) {
				try {
					console.log('dataUser: ', dataUser)
					const res = await getRequestUser(dataUser._id)
					console.log(res)
					const data = []
					res.forEach((element, index) => {
						data.push({
							key: index + 1,
							image: element.sender.imagePath,
							name: element.name,
							title: element.title,
							description: element.description,
							status: element.status,
							visibility: element.visibility,
							date: element.createdAt
						})
					})
					setDataRequest(data)
				} catch (error) {
					console.log('error: ', error)
					toast.error(error.message)
				}
			}
		})()
	}, [dataUser])

	const { list } = useCallApiList(getListReviewer, 'reviewer')

	const onClick = e => {
		console.log('click ', e)
		setCurrent(e.key)
	}

	const onChange = async (pagination, filters, sorter, extra) => {
		console.log('pagination: ', pagination)
		console.log('filters: ', filters)
		console.log('sorter: ', sorter)
		console.log('extra: ', extra)
	}

	return (
		<div className={`${styles.SeeRequest}`}>
			<Row className="row">
				<Col lg={24} xl={17} className="col">
					<div className="container-list-request">
						<Menu
							className="menu"
							mode="horizontal"
							onClick={onClick}
							defaultSelectedKeys={[current]}
							theme={`${darkModeLocalStorage === false ? 'light' : 'dark'}`}
							items={items}
						/>
						<div className="content">
							<Table
								className="table"
								size="middle"
								columns={columns}
								pagination={{
									pageSize: 6,
									position: ['bottomCenter']
								}}
								dataSource={dataRequest}
								onChange={onChange}
							/>
						</div>
					</div>
				</Col>
				<Col lg={24} xl={6} className="col">
					<div className="container-list-review">
						<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Đánh giá gần nhất</h5>
						<ul className="list">
							{list &&
								list.length > 0 &&
								list.map((element, index) => (
									<li key={index}>
										<Information
											isReviewerPage
											url={element.url}
											name={element.name}
											description={element.description}
										/>
									</li>
								))}
						</ul>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default SeeRequest
