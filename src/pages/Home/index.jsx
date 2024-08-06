import { Layout } from 'antd'
import { useEffect } from 'react'

import AboutMe from '~/components/AboutMe'
import Challenge from '~/components/Challenge'
import Introduction from '~/components/Introduction'
import Language from '~/components/Languages'
import Reviewer from '~/components/Reviewer'
import useDarkMode from '~/hook/useDarkMode'
import { scrollToTop } from '~/utils/animationscrollToTop'
import useStyles from './styles'

const Home = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles(darkModeLocalStorage)

	useEffect(() => scrollToTop(), [])

	return (
		<Layout className={`${styles.Home}`}>
			<Introduction />
			<div className="container-challenge">
				<Challenge isTitle />
			</div>
			<Reviewer />
			<div className="backgourd">
				<AboutMe />
				<div className={`line`} />
				<Language />
			</div>
		</Layout>
	)
}

export default Home
