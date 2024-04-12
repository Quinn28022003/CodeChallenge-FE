import useStyles from './styles'

const EmptyData = () => {
	const { styles } = useStyles()

	return (
		<div className={styles.emptyData}>
			<div className="desc">Chưa có dữ liệu</div>
		</div>
	)
}

export default EmptyData
