import { UploadOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row, Tooltip, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { download } from '~/api/file'
import { getRequestDetail } from '~/api/request'
import { sendFeedback } from '~/api/response'
import globalSocket from '~/common/GlobalSocket'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useConvertData from '~/hook/useConvertData'
import useDarkMode from '~/hook/useDarkMode'
import useLoading from '~/hook/useLoading'
import useStyles from './styles'

const AssignmentDetail = () => {
	const socket = globalSocket(import.meta.env.VITE_SERVER)
	const { darkModeLocalStorage } = useDarkMode()
	const { userInfo } = useCommon()
	const { dataUser } = useConvertData({
		userInfo
	})
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	const [value, setValue] = useState()
	const { id } = useParams()
	const [dataRequest, setDataRequest] = useState()
	const { handleChangeLoading } = useLoading()
	const [dataForm, setDataForm] = useState({
		sender: '',
		receiver: '',
		name: '',
		description: '',
		point: 0,
		files: ''
	})
	const props = {
		name: 'files',
		headers: {
			authorization: 'authorization-text'
		},
		accept: '.jpg,.jpeg,.png,.doc,.docx,.tiff,.pdf,.mp4',
		listType: 'picture',
		multiple: true,
		beforeUpload: file => {
			setDataForm(prevData => ({
				...prevData,
				files: [...prevData.files, file]
			}))
			return false
		},
		onRemove: file => {
			setDataForm(prevData => ({
				...prevData,
				files: prevData.files.filter(f => f.uid !== file.uid)
			}))
		}
	}

	window.onload = () => {
		if (localStorage.getItem('showSuccessToast') === 'true') {
			toast.success('Gửi thành công!')
			localStorage.removeItem('showSuccessToast')
		}
	}

	const downloadFile = async path => {
		await download(path)
	}

	const handleOnchangePoint = e => {
		if (isNaN(Number(e.target.value))) {
			toast.error('Please enter number')
			setValue(0)
		} else if (Number(e.target.value) > 100) {
			toast.error('Cannot exceed 100')
			setValue(100)
		} else {
			setValue(Number(e.target.value))
		}
	}

	const handleOnclickSubmit = async () => {
		if (dataForm.name === '') {
			toast.error(`Don't leave the name blank`)
		} else if (dataForm.description === '') {
			toast.error(`Don't leave the description blank`)
		} else {
			try {
				const res = await sendFeedback({
					...dataForm,
					point: value,
					sender: dataUser._id,
					receiver: dataRequest.sender._id
				})

				console.log(res)

				const container = {
					sender: dataUser._id,
					receiver: dataRequest.sender._id,
					name: dataForm.name,
					description: dataForm.description,
					idRequest: id,
					status: 'completed'
				}

				if (res.message === 'success!') {
					await socket.emit('createResponse', container)

					localStorage.setItem('showSuccessToast', 'true')
					handleChangeLoading('/see-request')
				}
			} catch (e) {
				console.log('Error: ', e.message)
				toast.error(e.message | 'Error then calling api')
			}
		}
	}

	useEffect(() => {
		;(async () => {
			try {
				const res = await getRequestDetail(id)
				setDataRequest(res)
			} catch (error) {
				console.log('Error: ', error)
				toast(error?.message || 'Error then calling api')
			}
		})()
	}, [id])

	return (
		<div className={`${styles.AssignmentDetail}`}>
			<Row className="row">
				<Col md={11} className="submissions">
					{dataRequest && (
						<>
							<h4 className={`title ${fontStyles['headline-4-regular-34px']}`}>Nộp bài</h4>
							<img src={`data:image/png;base64,${dataRequest.sender.imagePath}`} alt="" className="image" />
							<p className="sub-title">Tiêu đề: {dataRequest.title}</p>
							<p className="description">Họ và tên: {dataRequest.name}</p>
							<p className="description">Mô tả: {dataRequest.description}</p>
							<p className="description">Hiển thị: {dataRequest.visibility}</p>
							<p className="description">Ngày gửi yêu cầu: {dataRequest.createdAt}</p>
							<p className="sub-title">File:</p>
							{dataRequest.pathFile.map((element, index) => (
								<div key={index} className="container-btn-download">
									<h6 className={`text ${fontStyles.caption}`}>{element}</h6>
									<Button
										type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
										className="btn-download"
										onClick={() => downloadFile(element)}
									>
										Download
									</Button>
								</div>
							))}
						</>
					)}
				</Col>
				<Col md={12} className="evaluate">
					<h4 className={`title ${fontStyles['headline-4-regular-34px']}`}>Đánh giá</h4>
					<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Tên người đánh giá:</h6>
					<Input
						placeholder="Nhập vào đây..."
						onChange={e =>
							setDataForm({
								...dataForm,
								name: e.target.value
							})
						}
					/>
					<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Mô tả:</h6>
					<TextArea
						rows={4}
						placeholder="Nhập vào đây..."
						onChange={e =>
							setDataForm({
								...dataForm,
								description: e.target.value
							})
						}
					/>
					<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>{'Điểm(0-100):'}</h6>
					<Tooltip trigger={['focus']} placement="topLeft" overlayClassName="numeric-input">
						<Input placeholder="Input a number" onChange={e => handleOnchangePoint(e)} value={value} maxLength={3} />
					</Tooltip>
					<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Tải lên:</h6>
					<Upload {...props}>
						<Button type={`${darkModeLocalStorage === false ? 'primary' : ''}`} icon={<UploadOutlined />}>
							Upload
						</Button>
					</Upload>
					<Button
						onClick={handleOnclickSubmit}
						className="btn"
						type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
					>
						Gửi Đánh Giá
					</Button>
				</Col>
			</Row>
		</div>
	)
}

export default AssignmentDetail
