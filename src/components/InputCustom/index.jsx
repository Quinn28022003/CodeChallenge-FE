import { Button, Input } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'

import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const InputCustom = ({ id, handleOnlickDeleteField, handleOnchangeSocialAccounts }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	const [name, setName] = useState('')

	const handleOnlickEdit = param => {
		if (name === param) {
			setName('')
		} else {
			setName(param)
		}
	}

	return (
		<div className={`${styles.InputCustom}`}>
			<div className="content">
				<Input
					size="large"
					readOnly={name !== id}
					disabled={name !== id}
					onChange={e => {
						handleOnchangeSocialAccounts(id, e.target.value)
					}}
					className="input"
					defaultValue={id}
				/>
				<Button
					onClick={() => handleOnlickEdit(id)}
					className="btn"
					type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
					size="large"
				>
					{name !== id ? 'Sửa' : 'Hủy'}
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
	handleOnlickDeleteField: PropTypes.func.isRequired,
	handleOnchangeSocialAccounts: PropTypes.func.isRequired
}

export default InputCustom
