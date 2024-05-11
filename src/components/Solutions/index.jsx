import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const Solutions = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	return (
		<div className={`${styles.Solutions}`}>
			<h4 className="title">Hiện tại page này đang trong quá trình phát triển.</h4>
		</div>
	)
}

export default Solutions
