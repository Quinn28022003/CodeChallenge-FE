import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import Comment from './Comment'
import useStyles from './styles'

const Discuss = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { innerWidth } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	return (
		<div className={`${styles.Discuss}`}>
			<div className="container">
				<Comment />
				<div className="sub-container">
					<Comment />
				</div>
				<div className="sub-container">
					<Comment />
				</div>
				<div className="sub-container">
					<Comment />
				</div>
				<div className="sub-container">
					<Comment />
				</div>
				<div className="sub-container">
					<Comment />
				</div>
			</div>
			<div className="container">
				<Comment />
				<div className="sub-container">
					<Comment />
				</div>
			</div>
		</div>
	)
}

export default Discuss
