import { Button } from 'antd'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const ItemNotification = ({ url, description, date, path, id, handleDeleteNotification, element }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})

	const onclick = id => {
		handleDeleteNotification(id)
	}

	return (
		<div className={`${styles.ItemNotification}`}>
			<div className="container-image">
				<span className="dot">•</span>
				<img src={`data:image/png;base64,${url}`} alt="" className="image" />
			</div>
			<p className={`description ${fontStyles['subtitle-2']}`}>{description}</p>
			<span className={`date ${fontStyles['subtitle-2']}`}>{date}</span>
			<div className="container-btn">
				{element.path ? (
					<Link to={`${path}`}>
						<Button className={`btn ${fontStyles.button}`} type={`${darkModeLocalStorage === true ? '' : 'primary'}`}>
							Xem chi tiết
						</Button>
					</Link>
				) : null}

				<Button
					className={`btn ${fontStyles.button}`}
					type={`${darkModeLocalStorage === true ? '' : 'primary'}`}
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
	handleDeleteNotification: PropTypes.func.isRequired,
	element: PropTypes.object.isRequired
}

export default ItemNotification
