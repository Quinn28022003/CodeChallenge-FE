import { Button, Layout, Space } from 'antd'
import useStyles from './styles'

const Home = () => {
	const { styles } = useStyles()
	return (
		<Layout className={`${styles.Home}`}>
			<div className="introdution">
				<div className="coating">
					<img src="/assets/images/girl-reading-book.png" alt="image-girl" className="image-girl" />
					<Space className="content">
						<h2 className="title italic">Chào mừng bạn đến với Code Challenge</h2>
						<h5 className="description italic">
							Nếu bạn chưa có tài khoản thì hay đăng ký ngay chỉ sau vài bước bạn đã có 1 tài khoản miễn phí.
						</h5>
						<Button className="btn BUTTON" type="primary">
							Đăng ký miễn phí
						</Button>
					</Space>
				</div>
			</div>
			<h5
				style={{
					WebkitTextStroke: '2px #04AA6D',
					fontWeight: '900',
					fontSize: '50px'
				}}
			>
				home
			</h5>
		</Layout>
	)
}

export default Home
