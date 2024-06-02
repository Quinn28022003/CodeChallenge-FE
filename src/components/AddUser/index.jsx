import useStyles from './styles'

const AddUser = () => {
	const { styles } = useStyles({})
	return (
		<div className={`${styles.AddUser}`}>
			<h4>AddUser</h4>
		</div>
	)
}

export default AddUser
