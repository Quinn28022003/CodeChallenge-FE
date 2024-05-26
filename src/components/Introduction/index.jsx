import { Button, Space } from 'antd'
import { Link } from 'react-router-dom'

import { fontStyles } from '~/constants/fontStyles'
import useText from '~/hook/useText'
import useStyles from './styles'

const Introduction = () => {
	const { styles } = useStyles()
	const { title, description } = useText()

	return (
		<div className={`${styles.Introduction}`}>
			<div className="coating">
				<img src="/assets/images/homePage/girl-reading-book.png" alt="image-girl" className="image-girl" />
				<Space className="content">
					<h2 className={`title ${title}`}>Chào mừng bạn đến với Code Challenge</h2>
					<h5 className={`description ${description}`}>
						Nếu bạn chưa có tài khoản thì hay đăng ký ngay chỉ sau vài bước bạn đã có 1 tài khoản miễn phí.
					</h5>
					<Link to={'/register'}>
						<Button className={`btn ${fontStyles.button}`} type="primary" size="large">
							Đăng ký miễn phí
						</Button>
					</Link>
				</Space>
			</div>
		</div>
	)
}

export default Introduction
