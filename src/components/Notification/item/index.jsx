import { BorderOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import PropTypes from 'prop-types'

import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const ItemNotification = ({ url, description, date }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})

	return (
		<div className={`${styles.ItemNotification}`}>
			<BorderOutlined className="dot" />
			<img src={url} alt="" className="image" />
			<p className={`description ${fontStyles['subtitle-2']}`}>{description}</p>
			<span className={`date ${fontStyles['subtitle-2']}`}>{date}</span>
			<div className="container-btn">
				<Button className={`btn ${fontStyles.button}`} type={`${darkModeLocalStorage === true ? 'primary' : ''}`}>
					Xem thêm
				</Button>
				<Button className={`btn ${fontStyles.button}`} type={`${darkModeLocalStorage === true ? 'primary' : ''}`}>
					Bỏ qua
				</Button>
			</div>
		</div>
	)
}

ItemNotification.propTypes = {
	url: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired
}

export default ItemNotification
