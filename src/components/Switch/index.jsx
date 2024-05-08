import { Space, Switch } from 'antd'

import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const SwitchComponent = () => {
	const { darkMode, handleChangeDarkMode } = useCommon()
	const { styles } = useStyles()
	const { darkModeLocalStorage } = useDarkMode()

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
