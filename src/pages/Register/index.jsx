import { RollbackOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Checkbox, DatePicker, Form, Input, Select, Space, Spin, Upload } from 'antd'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { register } from '~/api/Auth'
import { fontStyles } from '~/constants/fontStyles'
import useLoading from '~/hook/useLoading'
import useNavigation from '~/hook/useNavigation'
import useText from '~/hook/useText'
import useStyles from './styles'

const Register = () => {
	const { styles } = useStyles()
	const { title } = useText()
	const { loading, handleChangeLoading } = useLoading()
	const [formData, setFormData] = useState({})
	const timeoutRef = useRef(null)
	const [checked, setChecked] = useState(false)
	const { handleChangeShowNav } = useNavigation()

	const props = {
		name: 'file',
		headers: {
			authorization: 'authorization-text'
		},
		maxCount: 1,
		accept: '.jpg,.jpeg,.png,.gif,.bmp,.tiff,.webp,.svg,.ico',
		listType: 'picture',
		beforeUpload: file => {
			setFormData({
				...formData,
				image: file
			})
			return false
		}
	}

	const HandleOnChangeDate = date => {
		const selectedDate = date.format('MM/DD/YYYY')
		setFormData({
			...formData,
			dateOfBirth: selectedDate
		})
	}

	const HandleOnChangeGender = value => {
		setFormData({
			...formData,
			gender: value
		})
	}

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleDelayedChange = e => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}

		timeoutRef.current = setTimeout(() => {
			handleChangePasswordAgain(e)
		}, 1000)
	}

	const handleChangePasswordAgain = e => {
		try {
			const password = e.target.value

			if (password !== formData.password) {
				throw new Error(`Re-entered the password and it didn't match`)
			}
		} catch (error) {
			toast.error(error.message)
		}
	}

	const handleSubmit = async () => {
		try {
			if (checked === false) {
				throw new Error('Please accept the terms of our website')
			}
			await register(formData, error => {
				throw error
			})
			handleChangeLoading('/login', 500)
			handleChangeShowNav(false)
			toast.success('Registration successful!')
		} catch (error) {
			console.log(error)

			toast.error(error.response?.data?.message || 'An error occurred during the api call')

			if (error.response.data.message && Array.isArray(error.response.data.message)) {
				error.response.data.message.forEach(errorMessage => {
					toast.error(errorMessage)
				})
			}
		}
	}

	const handlePhoneNumberChange = e => {
		const inputValue = e.target.value
		const phoneNumber = inputValue.replace(/\D/g, '')
		setFormData({
			...formData,
			phoneNumber
		})
	}

	const handleOnChangeCheckBox = () => {
		setChecked(!checked)
	}

	return (
		<Spin spinning={loading}>
			<div className={`${styles.Register}`}>
				<div className="container">
					<h4 className={`come-back ${fontStyles.button}`} onClick={() => handleChangeLoading('/', 500)}>
						<RollbackOutlined className="icon" />
						Back page home
					</h4>
					<img src="/assets/images/mau-slide-powerpoint-chao-mung_015419457.jpg" alt="" className="image" />
					<Space className="form-container">
						<h3 className={`title ${title}`}>Đăng ký</h3>
						<Form
							name="basic"
							initialValues={{
								remember: true
							}}
							onFinish={e => handleSubmit(e)}
							autoComplete="off"
							className="form"
						>
							<div className="container">
								<Space className="content-1">
									<Form.Item
										name="codeChanllengeID"
										rules={[
											{
												required: true,
												message: 'Please input your codeChanllengeID!'
											}
										]}
										className="item"
									>
										<Input
											name="codeChanllengeID"
											size="large"
											placeholder="Nhập codeChanllengeID vào đây..."
											className="input"
											onChange={e => handleChange(e)}
										/>
									</Form.Item>

									<Form.Item
										name="firstName"
										rules={[
											{
												required: true,
												message: 'Please input your firstName!'
											}
										]}
										className="item"
									>
										<Input
											name="firstName"
											size="large"
											placeholder="Nhập firstName vào đây..."
											className="input"
											onChange={e => handleChange(e)}
										/>
									</Form.Item>

									<Form.Item
										name="lastName"
										rules={[
											{
												required: true,
												message: 'Please input your lastName!'
											}
										]}
										className="item"
										onChange={e => handleChange(e)}
									>
										<Input
											name="lastName"
											size="large"
											placeholder="Nhập lastName vào đây..."
											className="input"
											onChange={e => handleChange(e)}
										/>
									</Form.Item>

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
										<Input
											name="email"
											size="large"
											placeholder="Nhập email vào đây..."
											className="input"
											onChange={e => handleChange(e)}
										/>
									</Form.Item>

									<Form.Item
										name="phoneNumber"
										rules={[
											{
												required: true,
												message: 'Please input your phoneNumber!'
											}
										]}
										className="item"
									>
										<Input
											name="phoneNumber"
											size="large"
											placeholder="Nhập phone number vào đây..."
											className="input"
											onChange={e => handlePhoneNumberChange(e)}
											type="tel"
										/>
									</Form.Item>
								</Space>

								<Space className="content-2">
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
										<Input.Password
											name="password"
											size="large"
											placeholder="Nhập password vào đây..."
											className="input"
											onChange={e => handleChange(e)}
										/>
									</Form.Item>

									<Form.Item
										name="password-again"
										rules={[
											{
												required: true,
												message: 'Please re-enter your password!'
											}
										]}
										className="item"
									>
										<Input.Password
											size="large"
											placeholder="Nhập lại password vào đây..."
											className="input"
											onChange={e => handleDelayedChange(e)}
										/>
									</Form.Item>

									<Form.Item
										name="address"
										rules={[
											{
												required: true,
												message: 'Please input your address!'
											}
										]}
										className="item"
									>
										<Input
											name="address"
											size="large"
											placeholder="Nhập address vào đây..."
											className="input"
											onChange={e => handleChange(e)}
										/>
									</Form.Item>

									<Form.Item>
										<Select
											name="gender"
											defaultValue="Gender"
											onChange={e => HandleOnChangeGender(e)}
											options={[
												{
													value: 'male',
													label: 'Male'
												},
												{
													value: 'female',
													label: 'Female'
												},
												{
													value: 'other',
													label: 'Other'
												}
											]}
											size="large"
										/>
									</Form.Item>

									<Form.Item>
										<DatePicker
											name="dateOfBirth"
											onChange={HandleOnChangeDate}
											size="large"
											className="datePicker"
											placeholder="Chọn năm sinh"
										/>
									</Form.Item>
								</Space>
							</div>

							<Form.Item>
								<Upload {...props} className="upload">
									<Button icon={<UploadOutlined />} size="large">
										Upload images
									</Button>
								</Upload>
							</Form.Item>

							<div className="links-container">
								<Checkbox checked={checked} onChange={handleOnChangeCheckBox}>
									Đồng ý với các <Link className="text">điều khoản</Link> và dịch vụ của trang web chung tôi?
								</Checkbox>
								<Link onClick={() => handleChangeLoading('/login', 500)} className="text">
									Bạn đã có tài khoản?
								</Link>
							</div>

							<Form.Item>
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

export default Register
