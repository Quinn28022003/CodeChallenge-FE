import { Button } from 'antd'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const ItemNotification = ({ url, description, date, path, id, handleDeleteNotification }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})

	const onclick = id => {
		handleDeleteNotification(id)
	}

	return (
		<div className={`${styles.ItemNotification}`}>
			<span className="dot">•</span>
			<img src={`data:image/png;base64,${url}`} alt="" className="image" />
			<p className={`description ${fontStyles['subtitle-2']}`}>{description}</p>
			<span className={`date ${fontStyles['subtitle-2']}`}>{date}</span>
			<div className="container-btn">
				<Link to={`${path}`}>
					<Button className={`btn ${fontStyles.button}`} type={`${darkModeLocalStorage === true ? 'primary' : ''}`}>
						Xem chi tiết
					</Button>
				</Link>
				<Button
					className={`btn ${fontStyles.button}`}
					type={`${darkModeLocalStorage === true ? 'primary' : ''}`}
					onClick={() => onclick(id)}
				>
					Bỏ qua
				</Button>
			</div>
		</div>
	)
}

ItemNotification.propTypes = {
	url: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleDeleteNotification: PropTypes.func.isRequired
}

export default ItemNotification
