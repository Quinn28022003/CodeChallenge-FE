import { Space, Switch } from 'antd'
import { useEffect, useState } from 'react'

import useCommon from '~/hook/useCommon'
import useStyles from './styles'

const SwitchComponent = () => {
	const { darkMode, handleChangeDarkMode } = useCommon()
	const { styles } = useStyles()

	const [darkModeLocalStorage, setDarkModeLocalStorage] = useState(() => {
		const storedDarkMode = localStorage.getItem('darkMode')
		return storedDarkMode ? JSON.parse(storedDarkMode) : false
	})

	useEffect(() => {
		const storedDarkMode = localStorage.getItem('darkMode')
		setDarkModeLocalStorage(storedDarkMode ? JSON.parse(storedDarkMode) : false)
	}, [darkMode])

	const onChange = () => {
		handleChangeDarkMode(!darkMode)
		localStorage.setItem('darkMode', JSON.stringify(!darkMode))
	}

	return (
		<Space className={`${styles.Switch}`}>
			<Switch checked={darkModeLocalStorage} size="small" onChange={onChange} />
		</Space>
	)
}

export default SwitchComponent
