import { Layout } from 'antd'

import AboutMe from '~/components/AboutMe'
import Introduction from '~/components/Introduction'
import Subscription from '~/components/Subscription'
import useStyles from './styles'

const Home = () => {
	const { styles } = useStyles()

	return (
		<Layout className={`${styles.Home}`}>
			<Introduction />
			<AboutMe />
			<Subscription />
		</Layout>
	)
}

export default Home
