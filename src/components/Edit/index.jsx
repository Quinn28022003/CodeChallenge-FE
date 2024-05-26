import { Button, Col, DatePicker, Input, Row, Select } from 'antd'
import { v4 as uuidv4 } from 'uuid'

import { PlusCircleOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import InputCustom from './item'
import useStyles from './styles'

const Edit = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	const [addInput, setAddInput] = useState([])
	const [name, setName] = useState('')

	const HandleOnChangeDate = date => {
		// const selectedDate = date.format('MM/DD/YYYY')
		// setFormData({
		// 	...formData,
		// 	dateOfBirth: selectedDate
		// })
	}

	const HandleOnChangeGender = value => {
		// setFormData({
		// 	...formData,
		// 	gender: value
		// })
	}

	const handleOnlickAddSocialAccount = () => {
		setAddInput([...addInput, uuidv4()])
	}

	const handleOnlickDeleteField = id => {
		setAddInput(addInput.filter(item => item !== id))
	}

	const handleOnlickEdit = param => {
		if (name === param) {
			setName('')
		} else {
			setName(param)
		}
	}

	useEffect(() => {
		console.log(name)
	})

	return (
		<div className={`${styles.Edit}`}>
			<Row className="row">
				<Col sm={24} md={6} className="col">
					<img src="/assets/images/test.png" alt="" className="image" />
				</Col>
				<Col sm={24} md={17} className="col">
					<div className="form">
						<h6 className={`title ${fontStyles['subtitle-1']}`}>Thông tin cơ bản</h6>
						<div className="container-input">
							<label htmlFor="" className="label">
								Tên:
							</label>
							<div className="content">
								<Input
									size="large"
									className="input"
									readOnly={name !== 'firstName'}
									defaultValue="Nội dung không thể {edit === true? '' : ''}"
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
						<div className="container-input">
							<label htmlFor="" className="label">
								Họ:
							</label>
							<div className="content">
								<Input
									size="large"
									className="input"
									readOnly={name !== 'lastName'}
									defaultValue="Nội dung không thể {edit === true? '' : ''}"
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
						<div className="container-input">
							<label htmlFor="" className="label">
								Mô tả:
							</label>
							<div className="content">
								<Input
									size="large"
									className="input"
									readOnly={name !== 'description'}
									defaultValue="Nội dung không thể {edit === true? '' : ''}"
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
						<div className="container-input">
							<label htmlFor="" className="label">
								Vị trí:
							</label>
							<div className="content">
								<Input
									size="large"
									className="input"
									readOnly={name !== 'address'}
									defaultValue="Nội dung không thể {edit === true? '' : ''}"
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
						<div className="container-input">
							<label htmlFor="" className="label">
								Công nghệ:
							</label>
							<div className="content">
								<Input
									size="large"
									className="input"
									readOnly={name !== 'technology'}
									defaultValue="Nội dung không thể {edit === true? '' : ''}"
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
						<div className="container-input">
							<label htmlFor="" className="label">
								Giới tính:
							</label>
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
						</div>
						<div className="container-input">
							<label htmlFor="" className="label">
								Ngày sinh:
							</label>
							<DatePicker
								name="dateOfBirth"
								onChange={HandleOnChangeDate}
								size="large"
								className="datePicker"
								placeholder="Chọn năm sinh"
							/>
						</div>

						<h6 className={`title account ${fontStyles['subtitle-1']}`}>Tài khoản</h6>
						<div className="container-input">
							<label htmlFor="" className="label">
								CodeChanllenge ID:
							</label>
							<div className="content">
								<Input
									size="large"
									className="input"
									readOnly={name !== 'codeChanllengeID'}
									defaultValue="Nội dung không thể {edit === true? '' : ''}"
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
						<div className="container-input">
							<label htmlFor="" className="label">
								Email:
							</label>
							<div className="content">
								<Input
									size="large"
									className="input"
									readOnly={name !== 'email'}
									defaultValue="Nội dung không thể {edit === true? '' : ''}"
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
										defaultValue="Nội dung không thể {edit === true? '' : ''}"
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
								<div className="container-input">
									<label htmlFor="" className="label">
										Mật khẩu cũ:
									</label>
									<div className="content">
										<Input size="large" className="input" defaultValue="Nội dung không thể {edit === true? '' : ''}" />
									</div>
								</div>
								<div className="container-input">
									<label htmlFor="" className="label">
										Mật khẩu mới:
									</label>
									<div className="content">
										<Input size="large" className="input" defaultValue="Nội dung không thể {edit === true? '' : ''}" />
									</div>
								</div>
								<div className="container-input">
									<label htmlFor="" className="label">
										Nhập lại mật khẩu:
									</label>
									<div className="content">
										<Input size="large" className="input" defaultValue="Nội dung không thể {edit === true? '' : ''}" />
									</div>
								</div>
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
							{addInput.map(id => (
								<InputCustom key={id} id={id} handleOnlickDeleteField={handleOnlickDeleteField} />
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
							<Button size="large" type={`${darkModeLocalStorage === false ? 'primary' : ''}`} className="btn">
								Áp dụng
							</Button>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Edit
