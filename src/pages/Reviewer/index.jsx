import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import { useState } from 'react'

import Challenge from '~/components/Challenge'
import Information from '~/components/Information'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const list = [
	{
		key: 'describeYourself',
		title: 'Mô tả bản thân:',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo.`
	},
	{
		key: 'birthOfDay',
		title: 'Năm sinh:',
		description: `28/02/2003.`
	},
	{
		key: 'name',
		title: 'Họ tên:',
		description: `Hà Hoàng Quân.`
	},
	{
		key: 'developerBackend',
		title: 'Phát triển backend:',
		description: `Nodejs, express, javascript, mysql, mongodb.`
	}
]

const listReviewer = [
	{
		key: 101,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 102,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 103,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 104,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 105,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 106,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 107,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 108,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 109,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	}
]

const ReviewerPage = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const [showListReviewer, setShowListReviewer] = useState(false)
	const { innerWidth } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		showListReviewer,
		innerWidth
	})

	const handleChangeShowListReviewer = () => {
		setShowListReviewer(!showListReviewer)
	}

	return (
		<div className={`${styles.ReviewerPage}`}>
			<Row className="container-reviewer">
				<Col md={24} lg={14} xl={16} className="information">
					<img src="/assets/images/test.png" alt="" className="img" />
					<div className="content">
						{list &&
							list.length > 0 &&
							list.map((element, index) => (
								<p key={element.key} className={`text ${fontStyles['subtitle-2']}`}>
									<strong className={`title ${fontStyles['subtitle-1']}`}>{element.title}</strong>
									{element.description}
								</p>
							))}
					</div>
					<Button size="large" className="btn-right" icon={<RightOutlined />} onClick={handleChangeShowListReviewer} />
				</Col>
				<Col xs={24} sm={24} md={12} lg={9} xl={7} className="list">
					<Button className="btn-left" icon={<LeftOutlined />} size="large" onClick={handleChangeShowListReviewer} />
					<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Danh sách người Reviewer</h5>
					<div className="content">
						{listReviewer &&
							listReviewer.length > 0 &&
							listReviewer.map((element, index) => (
								<div key={element.key}>
									<Information isReviewerPage url={element.url} name={element.name} description={element.description} />
								</div>
							))}
					</div>
				</Col>
			</Row>
			<Challenge isTitle />
		</div>
	)
}

export default ReviewerPage
