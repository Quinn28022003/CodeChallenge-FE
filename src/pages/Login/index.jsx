import { RollbackOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space, Spin } from 'antd'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { login } from '~/api/Auth'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useLoading from '~/hook/useLoading'
import useText from '~/hook/useText'
import useStyles from './styles'

const Login = () => {
	const { styles } = useStyles()
	const { title } = useText()
	const { loading, handleChangeLoading } = useLoading()
	const { handleChangeIsLoggedIn, handleChangePermission, handleChangeUserInfo } = useCommon()

	const onFinish = async values => {
		try {
			const res = await login(values, error => {
				throw error
			})

			if (res.isLoggedIn === true) {
				handleChangePermission(res.userReal.role)
				handleChangeIsLoggedIn(res.isLoggedIn)
				toast.success('Login successful!')
				handleChangeLoading('/', 500)
				handleChangeUserInfo(res.userReal)
			}
		} catch (error) {
			toast.error(error.response?.data?.message)

			if (error.response?.data?.message && Array.isArray(error.response?.data?.message)) {
				error.response?.data?.message.forEach(errorMessage => {
					toast.error(errorMessage)
				})
			}
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
