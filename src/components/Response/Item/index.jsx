import { Button } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { download } from '~/api/File/file'
import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const ItemResponse = ({
	manage,
	index,
	url,
	name,
	description,
	date,
	pathFile,
	handleDataReviewer,
	sender,
	idResponse
}) => {
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

	const downloadFile = async path => {
		await download(path)
	}

	return (
		<div className={`${styles.ItemResponse}`}>
			<div className="item-one">
				<span className={`stt ${fontStyles.button}`}>{index}</span>
				<img src={`data:image/png;base64,${url}`} alt="" className="image" />
				<h6 className={`title-response ${fontStyles['subtitle-1']}`}>{name}</h6>
				{manage === true ? (
					<p className={`description ${fontStyles['subtitle-2']}`}>{description}</p>
				) : (
					<span className={`date ${fontStyles['subtitle-2']}`}>{date}</span>
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
								onClick={() => handleDataReviewer(url, name, sender, idResponse)}
							>
								Đánh giá
							</Button>
						</>
					)}
				</div>
			</div>
			<div className="item-two">
				<h6 className={`title ${fontStyles['subtitle-2']}`}>Nhận xét:</h6>
				<p className={`description ${fontStyles.caption}`}>{description}</p>
				<h6 className={`title ${fontStyles['subtitle-2']}`}>File:</h6>
				{pathFile &&
					pathFile.length > 0 &&
					pathFile.map(element => (
						<div key={element} className="file">
							<span className={`name ${fontStyles.caption}`}>{element}</span>
							<Button
								type={darkModeLocalStorage === false ? 'primary' : ''}
								onClick={() => downloadFile(element)}
								size="middle"
							>
								Download
							</Button>
						</div>
					))}
			</div>
		</div>
	)
}

ItemResponse.propTypes = {
	manage: PropTypes.bool,
	index: PropTypes.number,
	url: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.string,
	pathFile: PropTypes.array,
	handleDataReviewer: PropTypes.func,
	sender: PropTypes.string,
	idResponse: PropTypes.string
}

export default ItemResponse
