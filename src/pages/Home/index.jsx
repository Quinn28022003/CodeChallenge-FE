import { Layout } from 'antd'

import Introduction from '~/components/Introduction'
import useStyles from './styles'

const Home = () => {
	const { styles } = useStyles()

	return (
		<Layout className={`${styles.Home}`}>
			<Introduction />
		</Layout>
	)
}

export default Home
