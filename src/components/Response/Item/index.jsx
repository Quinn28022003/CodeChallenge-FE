import { Button } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const ItemResponse = ({ manage, url, name, description }) => {
	const [showResponse, setShowResponse] = useState(false)
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage,
		showResponse,
		manage
	})

	const handleOnclickShowResponse = () => {
		setShowResponse(!showResponse)
	}

	return (
		<div className={`${styles.ItemResponse}`}>
			<div className="item-one">
				<span className={`stt ${fontStyles.button}`}>1</span>
				<img src={`data:image/png;base64,${url}`} alt="" className="image" />
				<h6 className={`title-response ${fontStyles['subtitle-1']}`}>{name}</h6>
				{manage === true ? (
					<p className={`description ${fontStyles['subtitle-2']}`}>{description}</p>
				) : (
					<span className={`date ${fontStyles['subtitle-2']}`}>28/02/2024</span>
				)}

				<div className="container-btn">
					{manage === true ? (
						<Link to={``}>
							<Button
								type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
								className={`btn ${fontStyles.button}`}
							>
								Xem chi tiết
							</Button>
						</Link>
					) : (
						<>
							<Link to={``}>
								<Button
									type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
									className={`btn ${fontStyles.button}`}
									onClick={() => handleOnclickShowResponse()}
								>
									Xem thêm
								</Button>
							</Link>
							<Button
								className={`btn ${fontStyles.button}`}
								type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
							>
								Đánh giá
							</Button>
						</>
					)}
				</div>
			</div>
			<div className="item-two">
				<h6 className={`title ${fontStyles['subtitle-2']}`}>Nhận xét:</h6>
				<p className={`description ${fontStyles.caption}`}>
					Em làm bài rất tốt, nhưng bên cạnh đó cần phải cải thiện thêm vấn đề code rằng phải clean bớt những đoạn code
					hoặc biến không sài đến, với class tailwind thì e nên tìm cách để làm cho nó gọn hơn dễ bảo trị hơn nhé.
				</p>
				<h6 className={`title ${fontStyles['subtitle-2']}`}>File:</h6>
				<div className="file">
					<span className={`name ${fontStyles.caption}`}>zzz.png</span>
					<a href="http://localhost:2802/files/download" download>
						<Button type={darkModeLocalStorage === false ? 'primary' : ''} size="middle">
							Download
						</Button>
					</a>
				</div>
				<div className="file">
					<span className={`name ${fontStyles.caption}`}>zzz.png</span>
					<a href="http://localhost:2802/files/download" download>
						<Button type={darkModeLocalStorage === false ? 'primary' : ''} size="middle">
							Download
						</Button>
					</a>
				</div>
			</div>
		</div>
	)
}

ItemResponse.propTypes = {
	manage: PropTypes.bool,
	url: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string
}

export default ItemResponse
