import { Button, Col, Row, Skeleton, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useConvertData from '~/hook/useConvertData'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const Profile = () => {
	const { userInfo } = useCommon()
	const { darkModeLocalStorage } = useDarkMode()
	const { dataUser } = useConvertData({
		userInfo
	})
	const { styles } = useStyles({
		darkModeLocalStorage
	})

	return (
		<div className={`${styles.Profile}`}>
			{dataUser ? (
				<Row className="row">
					<Col className="col" md={24} lg={6}>
						<div className="container-information">
							<img src={`data:image/png;base64,${dataUser.imagePath}`} alt="" className="image" />
							<p className={`text ${fontStyles['subtitle-2']}`}>
								<strong className={`title ${fontStyles['subtitle-2']}`}>CodeChanllenge ID:</strong>
								{dataUser.codeChanllengeID}
							</p>
							<p className={`text ${fontStyles['subtitle-2']}`}>
								<strong className={`title ${fontStyles['subtitle-2']}`}>Họ tên:</strong>
								{`${dataUser.lastName} ${dataUser.firstName}`}
							</p>
							<p className={`text ${fontStyles['subtitle-2']}`}>
								<strong className={`title ${fontStyles['subtitle-2']}`}>Năm sinh:</strong>
								{dataUser.dateOfBirth}
							</p>
							<p className={`text ${fontStyles['subtitle-2']}`}>
								<strong className={`title ${fontStyles['subtitle-2']}`}>Giới tính:</strong>
								{dataUser.gender}
							</p>
							<p className={`text ${fontStyles['subtitle-2']}`}>
								<strong className={`title ${fontStyles['subtitle-2']}`}>Mô tả:</strong>
								{dataUser.description}
							</p>
							<p className={`text ${fontStyles['subtitle-2']}`}>
								<strong className={`title ${fontStyles['subtitle-2']}`}>Vị trí:</strong>
								{dataUser.address}
							</p>
							<p className={`text ${fontStyles['subtitle-2']}`}>
								<strong className={`title ${fontStyles['subtitle-2']}`}>Công nghệ sử dụng:</strong>
								{dataUser.technology}
							</p>
							<p className={`text ${fontStyles['subtitle-2']}`}>
								<strong className={`title ${fontStyles['subtitle-2']}`}>Email:</strong>
								{dataUser.email}
							</p>
							<p className={`text socialAccounts ${fontStyles['subtitle-2']}`}>
								<strong className={`title ${fontStyles['subtitle-2']}`}>Tài khoản xã hội:</strong>
							</p>
							<ul>
								{dataUser.socialAccounts.length > 0 &&
									dataUser.socialAccounts.map((element, index) => (
										<li className={`${fontStyles['subtitle-2']}`} key={index}>
											{element}
										</li>
									))}
							</ul>
						</div>
					</Col>
					<Col className="col" md={24} lg={17}>
						<div className="container-challenge">
							<Statistic className="statistic" title="Cơ bản" value={10} />
							<Statistic title="Trung bình" value={6} />
							<Statistic title="Nâng cao" value={3} />
						</div>
						<div className="container-completed-latest">
							<h6 className={`title ${fontStyles['subtitle-1']}`}>Bài mới hoàn thành gần nhất</h6>
							<ul className="list">
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>

								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
							</ul>
						</div>

						<div className="container-comments-latest">
							<h6 className={`title ${fontStyles['subtitle-1']}`}>Bình luận gần nhất</h6>
							<ul className="list">
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
								<li className="item">
									<Link to={''}>
										<span className="text">1. Hai Tổng</span>
									</Link>
									<Button className="btn" size="small">
										Cơ bản
									</Button>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			) : (
				<Skeleton
					avatar
					paragraph={{
						rows: 4
					}}
				/>
			)}
		</div>
	)
}

export default Profile
