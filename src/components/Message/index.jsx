import PropTypes from 'prop-types'
import useDarkMode from '~/hook/useDarkMode'

import { fontStyles } from '~/constants/fontStyles'
import useStyles from './styles'

const Message = ({ itIsMe, content, date, time }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage,
		itIsMe
	})

	return (
		<div className={`${styles.Message}`}>
			<div>
				<p className="text">{content}</p>
				<div className="info">
					<span className={`time ${fontStyles.caption}`}>{time}</span>
					<span className={`date ${fontStyles.caption}`}>{date}</span>
				</div>
			</div>
		</div>
	)
}

Message.propTypes = {
	itIsMe: PropTypes.bool.isRequired,
	content: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired
}

export default Message
