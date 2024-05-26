import { RollbackOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, Spin } from 'antd'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { login } from '~/api/Auth/auth'
import globalSocket from '~/common/GlobalSocket'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useLoading from '~/hook/useLoading'
import useNavigation from '~/hook/useNavigation'
import useText from '~/hook/useText'
import useStyles from './styles'

const Login = () => {
	const { styles } = useStyles()
	const { title } = useText()
	const { loading, handleChangeLoading } = useLoading()
	const { handleChangeIsLoggedIn, handleChangePermission, handleChangeUserInfo } = useCommon()
	const { handleChangeShowNav } = useNavigation()
	const socket = globalSocket(import.meta.env.VITE_SERVER)

	const onFinish = async values => {
		try {
			const res = await login(values, error => {
				throw error
			})

			if (res.data.isLoggedIn === true) {
				handleChangePermission(res.data.userReal.role)
				handleChangeIsLoggedIn(res.data.isLoggedIn)
				toast.success(res.message)
				handleChangeLoading('/', 500)
				handleChangeShowNav(false)
				const storedUserUUID = localStorage.getItem('userUUID')
				const data = {
					userId: res.data.userReal._id,
					useruuid: storedUserUUID,
					token: res.data.token
				}

				socket.emit('login-connection', data)

				socket.on('data', ({ user, isLoggedIn }) => {
					handleChangeUserInfo(user)
					handleChangeIsLoggedIn(isLoggedIn)
				})

				const loginConnectionListener = message => {
					console.log('Received message from server:', message)
					socket.off('login-connection', loginConnectionListener)
				}

				socket.on('login-connection', loginConnectionListener)
			}
		} catch (error) {
			console.log(error)
			toast.error(error?.response?.data?.error?.message || 'Login failed')
		}
	}

	return (
		<Spin spinning={loading}>
			<div className={`${styles.Login}`}>
				<div className="container">
					<Link onClick={() => handleChangeLoading('/', 500)} className={`come-back ${fontStyles.button}`}>
						<RollbackOutlined className="icon" />
						Back page home
					</Link>
					<img src="/assets/images/mau-slide-powerpoint-chao-mung_015419457.jpg" alt="" className="image" />
					<Space className="form-container">
						<h3 className={`title ${title}`}>Đăng nhập</h3>
						<Form
							name="basic"
							initialValues={{
								remember: true
							}}
							onFinish={onFinish}
							autoComplete="off"
							className="form"
						>
							<Form.Item
								name="email"
								rules={[
									{
										required: true,
										message: 'Please input your email!'
									},
									({ getFieldValue }) => ({
										validator: (_, value) => {
											const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
											if (!value || emailRegex.test(value)) {
												return Promise.resolve()
											}
											return Promise.reject(new Error('Please input a valid email!'))
										}
									})
								]}
								className="item"
							>
								<Input size="large" placeholder="Nhập email vào đây..." className="input" />
							</Form.Item>

							<Form.Item
								name="password"
								rules={[
									{
										required: true,
										message: 'Please input your password!'
									}
								]}
								className="item"
							>
								<Input.Password size="large" placeholder="Nhập password vào đây..." className="input" />
							</Form.Item>

							<div className="links-container">
								<Link className="text">Quên mật khẩu</Link>
								<Link onClick={() => handleChangeLoading('/register', 500)} className="text">
									Bạn chưa có tài khoản?
								</Link>
							</div>

							<Form.Item className="item">
								<Button type="primary" htmlType="submit" size="large" className="btn" loading={false}>
									Submit
								</Button>
							</Form.Item>
						</Form>
					</Space>
				</div>
			</div>
		</Spin>
	)
}

export default Login
