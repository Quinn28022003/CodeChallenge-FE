import { Button, Form, Input, Space } from 'antd'
import { toast } from 'react-toastify'

import { Subscriber } from '~/api/Subscriber/subscriber'
import { fontStyles } from '~/constants/fontStyles'
import useText from '~/hook/useText'
import useStyles from './styles'

const Subscription = () => {
	const { styles } = useStyles()
	const { title, description } = useText()
	const [form] = Form.useForm()

	const onFinish = async values => {
		try {
			const data = {
				email: values.email
			}
			const response = await Subscriber(data, error => {
				throw error
			})
			if (response.data.errorCode === 0) {
				form.resetFields()
				toast.success('Subscriber successfully!')
			} else {
				toast.error('error')
			}
		} catch (error) {
			toast.error(error.response.data.message)
		}
	}

	return (
		<div className={`${styles.Subscription}`}>
			<Space className="content">
				<h2 className={`title ${title}`}>Đăng ký nhận thông báo nhắc nhở ôn tập</h2>
				<h5 className={`description ${description}`}>
					Khi bạn sử dụng tính năng này thì nó sẽ được thông báo đến tài khoản của bạn và email để nhắc nhở bạn ôn tập
					mỗi ngày.
				</h5>
				<Form form={form} name="Subscriber" className="form" onFinish={onFinish}>
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
					>
						<Input placeholder="Nhập email vào đây" size="large" />
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" className={`${fontStyles.button}`} size="large">
							Đăng ký
						</Button>
					</Form.Item>
				</Form>
			</Space>
		</div>
	)
}

export default Subscription
