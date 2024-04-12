import { useEffect, useState } from 'react'

import useStyles from './styles'

const Welcome = () => {
	const { styles } = useStyles()

	const [value, setValue] = useState()

	useEffect(() => {
		setValue(value + 1)
	}, [value])

	return (
		<div className={styles.welcome}>
			<h1>Welcome</h1>
			<div />
		</div>
	)
}

export default Welcome
