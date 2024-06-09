import { DatePicker, Form, Input, Select } from 'antd'

import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const AddChallenge = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	return (
		<div className={`${styles.AddChallenge}`}>
			<h4 className={`title ${fontStyles['headline-4-regular-34px']}`}>Add Challenge</h4>
			<Form className="form">
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
							Tiêu đề:
						</label>
						<div className="content">
							<Input size="large" className="input" placeholder="Hãy nhập vào đây..." />
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
							{'Mô tả:'}
						</label>
						<div className="content">
							<Input size="large" className="input" placeholder="Hãy nhập vào đây..." />
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
							<Input size="large" className="input" placeholder="Hãy nhập vào đây..." />
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
							<Input size="large" className="input" placeholder="Hãy nhập vào đây..." />
						</div>
					</div>
				</Form.Item>

				<Form.Item name="phoneNumber" className="item">
					<div className="container-input">
						<label htmlFor="" className="label">
							Số điện thoại:
						</label>
						<div className="content">
							<Input size="large" className="input" placeholder="Hãy nhập vào đây..." />
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
							<Input size="large" className="input" placeholder="Hãy nhập vào đây..." />
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
							Ngày sinh:
						</label>
						<DatePicker name="dateOfBirth" size="large" className="datePicker" placeholder="Chọn năm sinh" />
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
							<Input size="large" className="input" />
						</div>
					</div>
				</Form.Item>

				<Form.Item name="email" className="item">
					<div className="container-input">
						<label htmlFor="" className="label">
							Email:
						</label>
						<div className="content">
							<Input size="large" className="input" />
						</div>
					</div>
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddChallenge
