import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, Empty, Row } from 'antd'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { getListReviewer, getdetailReviewer } from '~/api/reviewer'
import Challenge from '~/components/Challenge'
import Information from '~/components/Information'
import { fontStyles } from '~/constants/fontStyles'
import useCallApiList from '~/hook/useCallApiList'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import { scrollToTop } from '~/utils/animationscrollToTop'
import useStyles from './styles'

const ReviewerPage = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const [showListReviewer, setShowListReviewer] = useState(false)
	const { innerWidth } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		showListReviewer,
		innerWidth
	})
	const { list } = useCallApiList(getListReviewer, 'reviewer')
	const [userDetail, setUserDetail] = useState()
	const [activeReviewer, setActiveReviewer] = useState()
	const [searchParams] = useSearchParams()

	const handleChangeShowListReviewer = () => setShowListReviewer(!showListReviewer)

	useEffect(() => {
		const data = searchParams.get('userId')
		if (data) {
			handleOnclickGetDetail(data)
		}
	}, [searchParams])

	const handleOnclickGetDetail = async idUser => {
		setActiveReviewer(idUser)
		const res = await getdetailReviewer(idUser)
		setUserDetail(res.data)
		scrollToTop()
	}

	return (
		<div className={`${styles.ReviewerPage}`}>
			<Row className="container-reviewer">
				<Col md={24} lg={14} xl={16} className="information">
					{userDetail ? (
						<>
							<img src={`data:image/png;base64,${userDetail.imagePath}`} alt="" className="img" />
							<div className="content">
								<p className={`text ${fontStyles['subtitle-2']}`}>
									<strong className={`title ${fontStyles['subtitle-1']}`}>Mô tả bản thân:</strong>
									{userDetail.description}
								</p>
								<p className={`text ${fontStyles['subtitle-2']}`}>
									<strong className={`title ${fontStyles['subtitle-1']}`}>Năm sinh:</strong>
									{userDetail.dateOfBirth}
								</p>
								<p className={`text ${fontStyles['subtitle-2']}`}>
									<strong className={`title ${fontStyles['subtitle-1']}`}>Họ tên:</strong>
									{`${userDetail.lastName} ${userDetail.firstName}`}
								</p>
								<p className={`text ${fontStyles['subtitle-2']}`}>
									<strong className={`title ${fontStyles['subtitle-1']}`}>Công nghệ sử dụng:</strong>
									{userDetail &&
										userDetail.technology.length > 0 &&
										userDetail.technology.map((element, index) => {
											if (userDetail.technology.length - 1 === index) {
												return `${element}.`
											}
											return `${element},`
										})}
								</p>
							</div>
						</>
					) : (
						<Empty className="empty" />
					)}
					<Button size="large" className="btn-right" icon={<RightOutlined />} onClick={handleChangeShowListReviewer} />
				</Col>
				<Col xs={24} sm={24} md={12} lg={9} xl={7} className="list">
					<Button className="btn-left" icon={<LeftOutlined />} size="large" onClick={handleChangeShowListReviewer} />
					<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Danh sách người Reviewer</h5>
					<div className="content">
						{list &&
							list.length > 0 &&
							list.map(element => (
								<div
									key={element.key}
									onClick={() => handleOnclickGetDetail(element.key)}
									className={`${element.key === activeReviewer ? 'item active' : 'item'}`}
								>
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
