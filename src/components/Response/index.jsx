import { Button, Col, Input, Rate, Row } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { getResponse } from '~/api/response'
import globalSocket from '~/common/GlobalSocket'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useConvertData from '~/hook/useConvertData'
import useDarkMode from '~/hook/useDarkMode'
import ItemResponse from './Item'
import useStyles from './styles'

const Response = () => {
	const socket = globalSocket(import.meta.env.VITE_SERVER)
	const { innerWidth, userInfo } = useCommon()
	const { dataUser } = useConvertData({
		userInfo
	})
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const [dataResponse, setDataResponse] = useState([])
	const [dataReviewer, setDataReviewer] = useState({
		name: 'Name',
		sender: ''
	})

	const [dataForm, setDataForm] = useState({
		name: '',
		description: '',
		rating: 0
	})

	const handleDataReviewer = (url, name, sender, idResponse) => {
		setDataReviewer({
			url,
			name,
			sender,
			idResponse
		})
	}

	window.onload = () => {
		if (localStorage.getItem('showSuccessToast') === 'true') {
			toast.success('Gửi thành công!')
			localStorage.removeItem('showSuccessToast')
		}
	}

	const handleOnclickSubmit = () => {
		if (dataForm.name === '') {
			toast.error(`Don't leave the name blank`)
		} else if (dataForm.description === '') {
			toast.error(`Don't leave the description blank`)
		} else if (dataForm.rating <= 0) {
			toast.error(`Please rate me`)
		} else if (dataReviewer.sender === '') {
			toast.error(`Please select a reviewer`)
		} else {
			const container = {
				sender: dataUser._id,
				receiver: dataReviewer.sender,
				description: dataForm.description,
				rating: dataForm.rating,
				idResponse: dataReviewer.idResponse
			}
			socket.emit('review', container)

			localStorage.setItem('showSuccessToast', 'true')
			window.location.reload()
		}
	}

	useEffect(() => {
		;(async () => {
			if (dataUser?._id) {
				try {
					const res = await getResponse(dataUser._id)
					setDataResponse(res.data)
				} catch (error) {
					console.log(error.message)
					toast.error(error.message | 'Error then calling api')
				}
			}
		})()
	}, [dataUser?._id])

	// useEffect(() => {
	// 	scrollToTop()
	// })

	return (
		<div className={`${styles.Response}`}>
			<Row className="row">
				<Col className="col" md={24} lg={11}>
					<div className="list-Response">
						<ul className="list">
							{dataResponse &&
								dataResponse.length > 0 &&
								dataResponse.map((element, index) => (
									<li key={element._id} className="item">
										<ItemResponse
											manage={false}
											index={index + 1}
											url={element.sender.imagePath}
											sender={element.sender._id}
											name={element.name}
											description={element.description}
											date={element.createdAt}
											pathFile={element.pathFile}
											handleDataReviewer={handleDataReviewer}
											idResponse={element._id}
										/>
									</li>
								))}
						</ul>
					</div>
				</Col>
				<Col className="col" md={24} lg={11}>
					<div className="form-review">
						<h5 className={`title ${fontStyles['headline-5-regular-24px']}`}>Đánh giá người chấm bài</h5>
						<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Người được đánh giá:</h6>
						<div className="person-being-evaluated">
							{dataReviewer.url ? (
								<img src={`data:image/png;base64,${dataReviewer.url}`} alt="" className="image" />
							) : (
								<img
									src={`${darkModeLocalStorage === false ? '/assets/images/defautDark.png' : '/assets/images/defautLight.png'}`}
									alt=""
									className="image"
								/>
							)}

							<h6 className={`name ${fontStyles['subtitle-1']}`}>{dataReviewer.name}</h6>
						</div>
						<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Tên người đánh giá:</h6>
						<Input
							size="large"
							className="input"
							onChange={e =>
								setDataForm({
									...dataForm,
									name: e.target.value
								})
							}
							placeholder="Hãy nhập tên bạn vào đây..."
						/>
						<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Mô tả:</h6>
						<TextArea
							className="text-area"
							onChange={e =>
								setDataForm({
									...dataForm,
									description: e.target.value
								})
							}
							placeholder="Nhập đánh giá của bạn vào đây..."
							rows={4}
						/>
						<h6 className={`sub-title ${fontStyles['headline-6-medium-20px']}`}>Đánh giá:</h6>
						<Rate
							className="rate"
							value={dataForm.rating}
							onChange={value =>
								setDataForm({
									...dataForm,
									rating: value
								})
							}
						/>
						<Button
							size="large"
							onClick={handleOnclickSubmit}
							type={`${darkModeLocalStorage === false ? 'primary' : ''}`}
							className="btn"
						>
							Gửi đánh giá
						</Button>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Response
