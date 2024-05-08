import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useText from '~/hook/useText'
import useStyles from './styles'

const list = [
	{
		title: 'Javascript',
		img: '/assets/images/language/javascript-logo-javascript-icon-transparent-free-png.webp'
	},
	{
		title: 'Typescript',
		img: '/assets/images/language/typescript-plain-icon-256x256-ypojgpyj.png'
	},
	{
		title: 'Php',
		img: '/assets/images/language/PHP-logo.svg.png'
	},
	{
		title: 'C sharp',
		img: '/assets/images/language/Logo_C_sharp.svg.png'
	},
	{
		title: 'Pythod',
		img: '/assets/images/language/Python-logo-notext.svg.png'
	},
	{
		title: 'Java',
		img: '/assets/images/language/Java_programming_language_logo.svg'
	},
	{
		title: 'Mysql',
		img: '/assets/images/language/mysql-logo.svg'
	},
	{
		title: 'C++',
		img: '/assets/images/language/cpp_logo.png'
	}
]

const Language = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles(darkModeLocalStorage)
	const { title } = useText()

	return (
		<div className={styles.Language}>
			<div className="container">
				<h3 className={`title ${title}`}>Ngôn ngữ lập trình</h3>
				<div className="content">
					{list &&
						list.length > 0 &&
						list.map(element => (
							<div className="item" key={element.title}>
								<img src={element.img} alt={`${element.title}`} className="image" />
								<h5 className={`sub-title ${fontStyles['headline-6-medium-20px']} `}>{element.title}</h5>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default Language
