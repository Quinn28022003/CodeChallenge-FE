import { PlusCircleOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, Row, Select, Upload } from 'antd'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

import { changePassword } from '~/api/auth'
import { update } from '~/api/users'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useConvertData from '~/hook/useConvertData'
import useDarkMode from '~/hook/useDarkMode'
import InputCustom from '../InputCustom'
import useStyles from './styles'

const Edit = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	const { userInfo } = useCommon()
	const [formData, setFormData] = useState()
	const [socialAccount, setSocialAccount] = useState([])
	const [name, setName] = useState('')
	const { dataUser } = useConvertData({
		userInfo
	})
	const [oldPassword, setOldPassword] = useState()
	const [newPassword, setNewPassword] = useState()

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

	useEffect(() => {
		if (dataUser) {
			setSocialAccount(dataUser.socialAccounts)
		}
	}, [dataUser])

	const HandleOnChangeDate = date => {
		const selectedDate = date.format('MM/DD/YYYY')
		setFormData({
			...formData,
			dateOfBirth: selectedDate
		})
	}

	const HandleOnChangeGender = value =>
		setFormData({
			...formData,
			gender: value
		})

	const handleOnlickAddSocialAccount = () => {
		setSocialAccount([...socialAccount, uuidv4()])
		setFormData({
			...formData,
			socialAccounts: [...socialAccount, uuidv4()]
		})
	}

	const handleOnlickDeleteField = id => {
		setSocialAccount(socialAccount.filter(item => item !== id))
		setFormData({
			...formData,
			socialAccounts: socialAccount.filter(item => item !== id)
		})
	}

	const handleOnlickEdit = param => {
		if (name === param) {
			setName('')
		} else {
			setName(param)
		}
	}

	const handleOnchangeSocialAccounts = (id, value) => {
		const data = socialAccount.filter(element => element !== id)
		setFormData({
			...formData,
			socialAccounts: [...data, value]
		})
		setSocialAccount([...data, value])
	}

	const handleSubmit = async () => {
		try {
			console.log(formData)
			if (formData) {
				const res = await update(dataUser._id, formData)
				if (res.data) {
					if (oldPassword && newPassword) {
						const data = {
							email: dataUser.email,
							oldPassword,
							newPassword
						}
						const res = await changePassword(data)

						if (res.data.errorCode === 0) {
							toast.success('Update information success!')
							setFormData(undefined)
							setName('')
						} else {
							toast.error('Error then calling api')
						}
					} else {
						toast.success('Update information success!')
						setFormData(undefined)
						setName('')
					}
				} else {
					toast.error('Error then calling api')
				}
			} else {
				toast.error('Information needs to be changed before you can click the apply button')
			}
		} catch (e) {
			toast.error(e.message)
		}
	}

	return (
		<div className={`${styles.Edit}`}>
			<Row className="row">
				{dataUser && (
					<>
						<Col sm={24} md={6} className="col">
							<div className="container-image">
								<img src={`data:image/png;base64,${dataUser.imagePath}`} alt="" className="image" />
								<Upload {...props} className="upload">
									<Button icon={<UploadOutlined />} size="large">
										Change photo
									</Button>
								</Upload>
							</div>
						</Col>
						<Col sm={24} md={17} className="col">
							<Form name="basic" autoComplete="off" className="form">
								<h6 className={`title ${fontStyles['subtitle-1']}`}>Thông tin cơ bản</h6>
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
									<div className="container-input">
										<label htmlFor="" className="label">
											Tên:
										</label>
										<div className="content">
											<Input
												size="large"
												className="input"
												readOnly={name !== 'firstName'}
												disabled={name !== 'firstName'}
												defaultValue={dataUser.firstName}
												onChange={e =>
													setFormData({
														...formData,
														firstName: e.target.value
													})
												}
											/>
											<Button
												onClick={() => handleOnlickEdit('firstName')}
												className="btn"
												type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
												size="large"
											>
												{name !== 'firstName' ? 'Sửa' : 'Hủy'}
											</Button>
										</div>
									</div>
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
								>
									<div className="container-input">
										<label htmlFor="" className="label">
											Họ:
										</label>
										<div className="content">
											<Input
												size="large"
												className="input"
												readOnly={name !== 'lastName'}
												disabled={name !== 'lastName'}
												defaultValue={dataUser.lastName}
												onChange={e =>
													setFormData({
														...formData,
														lastName: e.target.value
													})
												}
											/>
											<Button
												onClick={() => handleOnlickEdit('lastName')}
												className="btn"
												type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
												size="large"
											>
												{name !== 'lastName' ? 'Sửa' : 'Hủy'}
											</Button>
										</div>
									</div>
								</Form.Item>

								<Form.Item
									name="description"
									rules={[
										{
											required: true,
											message: 'Please input your description!'
										}
									]}
									className="item"
								>
									<div className="container-input">
										<label htmlFor="" className="label">
											Mô tả:
										</label>
										<div className="content">
											<Input
												size="large"
												className="input"
												readOnly={name !== 'description'}
												disabled={name !== 'description'}
												onChange={e =>
													setFormData({
														...formData,
														description: e.target.value
													})
												}
												defaultValue={dataUser.description}
											/>
											<Button
												onClick={() => handleOnlickEdit('description')}
												className="btn"
												type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
												size="large"
											>
												{name !== 'description' ? 'Sửa' : 'Hủy'}
											</Button>
										</div>
									</div>
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
									<div className="container-input">
										<label htmlFor="" className="label">
											Vị trí:
										</label>
										<div className="content">
											<Input
												size="large"
												className="input"
												readOnly={name !== 'address'}
												disabled={name !== 'address'}
												onChange={e =>
													setFormData({
														...formData,
														address: e.target.value
													})
												}
												defaultValue={dataUser.address}
											/>
											<Button
												onClick={() => handleOnlickEdit('address')}
												className="btn"
												type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
												size="large"
											>
												{name !== 'address' ? 'Sửa' : 'Hủy'}
											</Button>
										</div>
									</div>
								</Form.Item>

								<Form.Item
									name="phoneNumber"
									rules={[
										{
											required: true,
											message: 'Please input your phoneNumber!'
										},
										({ getFieldValue }) => ({
											validator: (_, value) => {
												if (value.length === 10 || value.length === 11) {
													return Promise.resolve()
												}
												return Promise.reject(new Error('Please enter the correct phone number!'))
											}
										})
									]}
									className="item"
								>
									<div className="container-input">
										<label htmlFor="" className="label">
											Số điện thoại:
										</label>
										<div className="content">
											<Input
												size="large"
												className="input"
												readOnly={name !== 'phoneNumber'}
												disabled={name !== 'phoneNumber'}
												onChange={e =>
													setFormData({
														...formData,
														phoneNumber: e.target.value
													})
												}
												defaultValue={dataUser.phoneNumber}
											/>
											<Button
												onClick={() => handleOnlickEdit('phoneNumber')}
												className="btn"
												type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
												size="large"
											>
												{name !== 'phoneNumber' ? 'Sửa' : 'Hủy'}
											</Button>
										</div>
									</div>
								</Form.Item>

								<Form.Item
									name="technology"
									rules={[
										{
											required: true,
											message: 'Please input your technology!'
										}
									]}
									className="item"
								>
									<div className="container-input">
										<label htmlFor="" className="label">
											Công nghệ:
										</label>
										<div className="content">
											<Input
												size="large"
												className="input"
												readOnly={name !== 'technology'}
												disabled={name !== 'technology'}
												onChange={e =>
													setFormData({
														...formData,
														technology: e.target.value
													})
												}
												defaultValue={dataUser.technology}
											/>
											<Button
												onClick={() => handleOnlickEdit('technology')}
												className="btn"
												type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
												size="large"
											>
												{name !== 'technology' ? 'Sửa' : 'Hủy'}
											</Button>
										</div>
									</div>
								</Form.Item>

								<Form.Item className="item">
									<div className="container-input">
										<label htmlFor="" className="label">
											Giới tính:
										</label>
										<Select
											name="gender"
											defaultValue={dataUser.gender}
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
									</div>
								</Form.Item>

								<Form.Item className="item">
									<div className="container-input">
										<label htmlFor="" className="label">
											Ngày sinh: {dataUser.dateOfBirth}
										</label>
										<DatePicker
											name="dateOfBirth"
											onChange={HandleOnChangeDate}
											size="large"
											className="datePicker"
											placeholder="Chọn năm sinh"
										/>
									</div>
								</Form.Item>

								<h6 className={`title account ${fontStyles['subtitle-1']}`}>Tài khoản</h6>
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
									<div className="container-input">
										<label htmlFor="" className="label">
											CodeChanllenge ID:
										</label>
										<div className="content">
											<Input
												size="large"
												className="input"
												readOnly={name !== 'codeChanllengeID'}
												disabled={name !== 'codeChanllengeID'}
												defaultValue={dataUser.codeChanllengeID}
												onChange={e =>
													setFormData({
														...formData,
														codeChanllengeID: e.target.value
													})
												}
											/>
											<Button
												onClick={() => handleOnlickEdit('codeChanllengeID')}
												className="btn"
												type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
												size="large"
											>
												{name !== 'codeChanllengeID' ? 'Sửa' : 'Hủy'}
											</Button>
										</div>
									</div>
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
									<div className="container-input">
										<label htmlFor="" className="label">
											Email:
										</label>
										<div className="content">
											<Input
												size="large"
												className="input"
												readOnly={name !== 'email'}
												disabled={name !== 'email'}
												defaultValue={dataUser.email}
												onChange={e =>
													setFormData({
														...formData,
														email: e.target.value
													})
												}
											/>
											<Button
												onClick={() => handleOnlickEdit('email')}
												className="btn"
												type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
												size="large"
											>
												{name !== 'email' ? 'Sửa' : 'Hủy'}
											</Button>
										</div>
									</div>
								</Form.Item>

								{name !== 'password' ? (
									<div className="container-input">
										<label htmlFor="" className="label">
											Mật khẩu:
										</label>
										<div className="content">
											<Input
												size="large"
												className="input"
												readOnly={name !== 'password'}
												disabled={name !== 'password'}
												defaultValue="********"
											/>
											<Button
												onClick={() => handleOnlickEdit('password')}
												className="btn"
												type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
												size="large"
											>
												{name !== 'password' ? 'Sửa' : 'Hủy'}
											</Button>
										</div>
									</div>
								) : (
									<>
										<Form.Item
											name="oldPassword"
											rules={[
												{
													required: true,
													message: 'Please input your oldPassword!'
												}
											]}
											className="item"
										>
											<div className="container-input">
												<label htmlFor="" className="label">
													Mật khẩu cũ:
												</label>
												<div className="content">
													<Input
														size="large"
														type="password"
														className="input"
														placeholder="Hãy nhập mật khẩu cũ vào đây..."
														onChange={e => setOldPassword(e.target.value)}
													/>
												</div>
											</div>
										</Form.Item>
										<Form.Item
											name="newPassword"
											rules={[
												{
													required: true,
													message: 'Please input your new password!'
												},
												({ getFieldValue }) => ({
													validator: (_, value) => {
														if (value.trim().length > 8) {
															return Promise.resolve()
														}
														return Promise.reject(new Error('Please enter a password longer than 8 characters!'))
													}
												})
											]}
											className="item"
										>
											<div className="container-input">
												<label htmlFor="" className="label">
													Mật khẩu mới:
												</label>
												<div className="content">
													<Input
														size="large"
														type="password"
														className="input"
														placeholder="Hãy nhập mật khẩu mới vào đây..."
														onChange={e => setNewPassword(e.target.value)}
													/>
												</div>
											</div>
										</Form.Item>
										<Form.Item
											name="re-password"
											rules={[
												{
													required: true,
													message: 'Please input your re-password!'
												},
												({ getFieldValue }) => ({
													validator: (_, value) => {
														if (value === newPassword) {
															return Promise.resolve()
														}
														return Promise.reject(new Error('Please enter the correct password!'))
													}
												}),
												({ getFieldValue }) => ({
													validator: (_, value) => {
														if (value.trim().length > 8) {
															return Promise.resolve()
														}
														return Promise.reject(new Error('Please enter a password longer than 8 characters!'))
													}
												})
											]}
											className="item"
										>
											<div className="container-input">
												<label htmlFor="" className="label">
													Nhập lại mật khẩu:
												</label>
												<div className="content">
													<Input size="large" type="password" className="input" placeholder="Hãy nhập lại vào đây..." />
												</div>
											</div>
										</Form.Item>

										<Button
											onClick={() => handleOnlickEdit('password')}
											className="btn"
											type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
											size="large"
										>
											{name !== 'password' ? 'Sửa' : 'Hủy'}
										</Button>
									</>
								)}

								<h6 className={`title social-account ${fontStyles['subtitle-1']}`}>Tài khoản xã hội</h6>
								<div className="container-social-account">
									{socialAccount.map(id => (
										<InputCustom
											key={id}
											id={id}
											handleOnlickDeleteField={handleOnlickDeleteField}
											handleOnchangeSocialAccounts={handleOnchangeSocialAccounts}
										/>
									))}
									<Button
										onClick={handleOnlickAddSocialAccount}
										className="btn"
										type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
										size="large"
									>
										Thêm <PlusCircleOutlined />
									</Button>
								</div>

								<div className="container-btn">
									<Button
										size="large"
										onClick={handleSubmit}
										type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
										className="btn"
									>
										Áp dụng
									</Button>
								</div>
							</Form>
						</Col>
					</>
				)}
			</Row>
		</div>
	)
}

export default Edit
