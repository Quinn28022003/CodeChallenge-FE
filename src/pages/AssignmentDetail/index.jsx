import { Button, Col, DatePicker, Input, Row, Tooltip, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import PropType from 'prop-types'
import { useState } from 'react'

import { UploadOutlined } from '@ant-design/icons'
import { fontStyles } from '~/constants/fontStyles'
import useStyles from './styles'

const formatNumber = value => new Intl.NumberFormat().format(value)

const NumericInput = ({ value, onChange }) => {
	const handleChange = e => {
		const { value: inputValue } = e.target
		const reg = /^-?\d*(\.\d*)?$/
		if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
			onChange(inputValue)
		}
	}

	const handleBlur = () => {
		let valueTemp = value
		if (value.charAt(value.length - 1) === '.' || value === '-') {
			valueTemp = value.slice(0, -1)
		}
		onChange(valueTemp.replace(/0*(\d+)/, '$1'))
	}
	const title = value ? (
		<span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
	) : (
		'Input a number'
	)
	return (
		<Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
			<Input {...props} onChange={handleChange} onBlur={handleBlur} placeholder="Input a number" maxLength={16} />
		</Tooltip>
	)
}

NumericInput.propTypes = {
	value: PropType.number.isRequired,
	onChange: PropType.func.isRequired
}

const props = {
	action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
	onChange: ({ file, fileList }) => {
		if (file.status !== 'uploading') {
			console.log(file, fileList)
		}
	}
}

const AssignmentDetail = () => {
	const { styles } = useStyles({})
	const [value, setValue] = useState('')

	const onChange = (date, dateString) => {
		console.log(date, dateString)
	}

	return (
		<div className={`${styles.AssignmentDetail}`}>
			<Row className="row">
				<Col span={11} className="submissions">
					<h4 className={`title ${fontStyles['headline-4-regular-34px']}`}>Nộp bài</h4>
					<img src="/assets/images/test.png" alt="" className="image" />
					<p className="sub-title">Tiêu đề: Tổng hai số - Hà Hoàng quân</p>
					<p className="description">Họ và tên: Hà Hoàng Quân</p>
					<p className="description">
						Mô tả: Em đã hoàn thành 80%, còn 20% em đang tìm hiểu co gì em bổ sung sau,Mô tả: Em đã hoàn thành 80%, còn
						20% em đang tìm hiểu co gì em bổ sung sau
					</p>
					<p className="description">Trạng thái: Private</p>
					<p className="description">Ngày gửi yêu cầu: 28/2/2020</p>
					<p className="sub-title">File:</p>
					<a href="http://localhost:2802/files/download" download>
						<Button type="primary">Download</Button>
					</a>
				</Col>
				<Col span={12} className="evaluate">
					<h4 className={`title ${fontStyles['headline-4-regular-34px']}`}>Đánh giá</h4>
					<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Tên người đánh giá:</h6>
					<Input placeholder="Nhập vào đây..." />
					<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Mô tả:</h6>
					<TextArea rows={4} placeholder="Nhập vào đây..." />
					<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>{'Điểm(0-100):'}</h6>
					<NumericInput
						style={{
							width: 120
						}}
						value={value}
						onChange={setValue}
						className="input-number"
					/>
					<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Ngày:</h6>
					<DatePicker onChange={onChange} />
					<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Tải lên:</h6>
					<Upload {...props}>
						<Button icon={<UploadOutlined />}>Upload</Button>
					</Upload>
					<Button className="btn">Gửi đánh giá</Button>
				</Col>
			</Row>
		</div>
	)
}

export default AssignmentDetail
