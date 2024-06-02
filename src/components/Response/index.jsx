import { Button, Col, Input, Rate, Row } from 'antd'

import TextArea from 'antd/es/input/TextArea'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const Response = () => {
	const { innerWidth } = useCommon()
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	return (
		<div className={`${styles.Response}`}>
			<Row className="row">
				<Col className="col" md={24} lg={11}>
					<div className="list-Response">
						<ul className="list">
							{/* <li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>

							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li>
							<li className="item">
								<ItemResponse />
							</li> */}
						</ul>
					</div>
				</Col>
				<Col className="col" md={24} lg={11}>
					<div className="form-review">
						<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Đánh giá người chấm bài</h5>
						<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Người được đánh giá:</h6>
						<div className="person-being-evaluated">
							<img src="/assets/images/test.png" alt="" className="image" />
							<h6 className={`name ${fontStyles['subtitle-1']}`}>Hà Hoàng Quân</h6>
						</div>
						<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Tên người đánh giá:</h6>
						<Input size="large" className="input" placeholder="Hãy nhập tên bạn vào đây..." />
						<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Mô tả:</h6>
						<TextArea className="text-area" placeholder="Nhập đánh giá của bạn vào đây..." rows={4} />
						<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Đánh giá:</h6>
						<Rate className="rate" />
						<Button size="large" type={`${darkModeLocalStorage === false ? 'primary' : ''}`} className="btn">
							Gửi đánh giá
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Response
