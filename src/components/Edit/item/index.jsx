import { Button, Input } from 'antd'
import PropTypes from 'prop-types'

import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const InputCustom = ({ id, handleOnlickDeleteField }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles()
	return (
		<div className={`${styles.InputCustom}`}>
			<div className="content">
				<Input size="large" className="input" readOnly={false} defaultValue="Nội dung không thể sửa" />
				<Button className="btn" type={`${darkModeLocalStorage === false ? 'primary' : ''}`} size="large">
					Sửa
				</Button>
				<Button
					onClick={() => handleOnlickDeleteField(id)}
					className="btn"
					type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
					size="large"
				>
					Xóa
				</Button>
			</div>
		</div>
	)
}

InputCustom.propTypes = {
	id: PropTypes.string.isRequired,
	handleOnlickDeleteField: PropTypes.func.isRequired
}

export default InputCustom
