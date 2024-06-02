import { CloseOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Input, Table, Tag } from 'antd'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const customColors = ['geekblue', 'green', 'volcano', 'blue', 'purple', 'magenta']
const getColor = index => customColors[index % customColors.length]

const List = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	const [challenge] = useState(false)
	const [columns] = useState(() => {
		if (challenge === true) {
			return [
				{
					title: 'STT',
					dataIndex: 'key',
					key: 'key',
					sorter: (a, b) => a.key - b.key
				},
				{
					title: 'Tiêu Đề',
					dataIndex: 'title',
					key: 'title',
					render: (text, record) => <Link to={`/practice/${record.key}`}>{text}</Link>,
					sorter: (a, b) => a.title.localeCompare(b.title)
				},
				{
					title: 'Ngôn ngữ',
					dataIndex: 'language',
					key: 'language',
					render: languages => (
						<span>
							{languages.map((language, index) => {
								let color = getColor(index)
								if (language === 'loser') {
									color = 'volcano'
								}
								return (
									<Tag color={color} key={language}>
										{language.toUpperCase()}
									</Tag>
								)
							})}
						</span>
					)
				},
				{
					title: 'Trạng thái',
					dataIndex: 'status',
					key: 'status'
				},
				{
					title: 'Độ khó',
					dataIndex: 'difficult',
					key: 'difficult',
					render: difficult => {
						let color = ''

						switch (difficult) {
							case 'easy': {
								color = 'green'
								break
							}
							case 'medium': {
								color = 'geekblue'
								break
							}
							case 'hard': {
								color = 'volcano'
								break
							}
						}
						return (
							<span>
								<Tag color={color} key={difficult}>
									{difficult.toUpperCase()}
								</Tag>
							</span>
						)
					}
				},
				{
					title: 'Chủ đề',
					dataIndex: 'topics',
					key: 'topics',
					render: topics => (
						<span>
							{topics.map((topic, index) => {
								let color = getColor(index)
								if (topic === 'loser') {
									color = 'volcano'
								}
								return (
									<Tag color={color} key={topic}>
										{topic.toUpperCase()}
									</Tag>
								)
							})}
						</span>
					)
				},
				{
					title: 'Chỉnh sửa',
					dataIndex: 'edit',
					key: 'edit',
					render: () => (
						<Button type={`${darkModeLocalStorage === false ? '' : 'primary'}`}>
							<EditOutlined />
						</Button>
					)
				},
				{
					title: 'Xóa',
					dataIndex: 'Xóa',
					key: 'Xóa',
					render: () => (
						<Button type={`${darkModeLocalStorage === false ? '' : 'primary'}`}>
							<DeleteOutlined />
						</Button>
					)
				}
			]
		} else {
			return [
				{
					title: 'STT',
					dataIndex: 'key',
					key: 'key',
					sorter: (a, b) => a.key - b.key
				},
				{
					title: 'codeChanllenge ID',
					dataIndex: 'codeChanllengeID',
					key: 'codeChanllengeID',
					sorter: (a, b) => a.key - b.key
				},
				{
					title: 'Ảnh',
					dataIndex: 'image',
					key: 'image',
					render: url => <img className="image" src={`data:image/png;base64,${url}`} alt="" />
				},
				{
					title: 'Họ',
					dataIndex: 'lastName',
					key: 'lastName',
					sorter: (a, b) => a.lastName - b.lastName
				},
				{
					title: 'Tên',
					dataIndex: 'firstName',
					key: 'firstName',
					sorter: (a, b) => a.firstName - b.firstName
				},
				{
					title: 'Email',
					dataIndex: 'email',
					key: 'email'
				},
				{
					title: 'Quyền hạn',
					dataIndex: 'role',
					key: 'role'
				},
				{
					title: 'Giới tính',
					dataIndex: 'gender',
					key: 'gender'
				},
				{
					title: 'Ngày sinh',
					dataIndex: 'dateOfBirth',
					key: 'dateOfBirth',
					sorter: (a, b) => a.dateOfBirth - b.dateOfBirth
				},
				{
					title: 'Địa chỉ',
					dataIndex: 'address',
					key: 'address'
				},
				{
					title: 'Số điện thoại',
					dataIndex: 'phoneNumber',
					key: 'phoneNumber'
				},
				{
					title: 'Chỉnh sửa',
					dataIndex: 'edit',
					key: 'edit',
					render: () => (
						<Button type={`${darkModeLocalStorage === false ? '' : 'primary'}`}>
							<EditOutlined />
						</Button>
					)
				},
				{
					title: 'Xóa',
					dataIndex: 'delete',
					key: 'delete',
					render: () => (
						<Button type={`${darkModeLocalStorage === false ? '' : 'primary'}`}>
							<DeleteOutlined />
						</Button>
					)
				}
			]
		}
	})

	return (
		<div className={`${styles.List}`}>
			<div className="header">
				<div className="filter-container">
					{Array.from(
						{
							length: 3
						},
						(_, i) => (
							<Button key={i} type="primary" size="middle" className="btn">
								Button
								<CloseOutlined />
							</Button>
						)
					)}
				</div>
				<Input size="large" prefix={<SearchOutlined />} className="input" />
			</div>
			<Table
				className="table"
				size={innerWidth < 576 ? 'small' : 'middle'}
				columns={columns}
				pagination={{
					pageSize: 16,
					position: ['bottomCenter']
				}}
				dataSource={[]}
				// onChange={onChange}
			/>
			<div className="container-detail">
				<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>CHI TIẾT</h5>
				<div className="content">
					<img src={`data:image/png;base64,${1}`} alt="" className="image" />
					<p className={`text ${fontStyles['subtitle-2']}`}>
						<strong className={`title ${fontStyles['subtitle-2']}`}>CodeChanllenge ID:</strong>
						quan123
					</p>
					<p className={`text ${fontStyles['subtitle-2']}`}>
						<strong className={`title ${fontStyles['subtitle-2']}`}>Họ tên:</strong>
						Hà Hoàng Quân
					</p>
					<p className={`text ${fontStyles['subtitle-2']}`}>
						<strong className={`title ${fontStyles['subtitle-2']}`}>Năm sinh:</strong>
						28/02/2024
					</p>
					<p className={`text ${fontStyles['subtitle-2']}`}>
						<strong className={`title ${fontStyles['subtitle-2']}`}>Giới tính:</strong>
						male
					</p>
					<p className={`text ${fontStyles['subtitle-2']}`}>
						<strong className={`title ${fontStyles['subtitle-2']}`}>Mô tả:</strong>
						Thích ăn kem giữa trời mưa và đánh đàn guitar
					</p>
					<p className={`text ${fontStyles['subtitle-2']}`}>
						<strong className={`title ${fontStyles['subtitle-2']}`}>Vị trí:</strong>
						Đắk Lắk
					</p>
					<p className={`text ${fontStyles['subtitle-2']}`}>
						<strong className={`title ${fontStyles['subtitle-2']}`}>Công nghệ sử dụng:</strong>
						reactjs, nodejs, nestjs, mysql
					</p>
					<p className={`text ${fontStyles['subtitle-2']}`}>
						<strong className={`title ${fontStyles['subtitle-2']}`}>Email:</strong>
						hahoangquan2@gmail.com
					</p>
					<p className={`text socialAccounts ${fontStyles['subtitle-2']}`}>
						<strong className={`title ${fontStyles['subtitle-2']}`}>Tài khoản xã hội:</strong>
					</p>
					<ul>
						{/* {dataUser.socialAccounts.length > 0 &&
							dataUser.socialAccounts.map((element, index) => (
								<li className={`${fontStyles['subtitle-2']}`} key={index}>
									{element}
								</li>
							))} */}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default List
