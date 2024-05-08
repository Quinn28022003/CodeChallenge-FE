import { Button } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const AuthButtons = ({ handleChangeLoading }) => {
	const { styles } = useStyles()
	const { darkModeLocalStorage } = useDarkMode()

	return (
		<div className={`${styles.AuthButtons}`}>
			<Link onClick={() => handleChangeLoading('/register', 500)}>
				<Button ghost={darkModeLocalStorage} className="hoverButton">
					Đăng ký
				</Button>
			</Link>
			<div className="line" />
			<Link onClick={() => handleChangeLoading('/login', 500)}>
				<Button ghost={darkModeLocalStorage} className="hoverButton">
					Đăng nhập
				</Button>
			</Link>
		</div>
	)
}

AuthButtons.propTypes = {
	handleChangeLoading: PropTypes.func.isRequired
}

export default AuthButtons
