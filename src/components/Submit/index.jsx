import { Button, Cascader, Input, Upload } from 'antd'

import { UploadOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { sendRequest } from '~/api/Request/request'
import { getListReviewer } from '~/api/Reviewer/reviewer'
import globalSocket from '~/common/GlobalSocket'
import { fontStyles } from '~/constants/fontStyles'
import useCallApiList from '~/hook/useCallApiList'
import useCommon from '~/hook/useCommon'
import useConvertData from '~/hook/useConvertData'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const optionsStatus = [
	{
		key: '1',
		label: 'public',
		value: 'public'
	},
	{
		key: '2',
		label: 'private',
		value: 'private'
	}
]

const Submit = () => {
	const socket = globalSocket(import.meta.env.VITE_SERVER)
	const { darkModeLocalStorage } = useDarkMode()
	const { innerWidth, userInfo } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const { dataUser } = useConvertData({
		userInfo
	})

	const { list } = useCallApiList(getListReviewer, 'reviewer')
	const [data, setData] = useState({
		title: '',
		name: dataUser?.lastName + ' ' + dataUser?.firstName,
		sender: dataUser?._id,
		receiver: '',
		description: '',
		visibility: 'private',
		files: ''
	})
	const [listReviewer, setListReviewer] = useState([])

	const onChangeReciever = value => {
		setData({
			...data,
			receiver: value[0]
		})
	}

	const onChangeStatus = value => {
		setData({
			...data,
			visibility: value[0]
		})
	}
	const onChangedescription = e => {
		setData({
			...data,
			description: e.target.value
		})
	}

	const props = {
		name: 'files',
		headers: {
			authorization: 'authorization-text'
		},
		accept: '.jpg,.jpeg,.png,.doc,.docx,.tiff,.pdf,.mp4',
		listType: 'picture',
		multiple: true,
		beforeUpload: file => {
			setData(prevData => ({
				...prevData,
				files: [...prevData.files, file]
			}))
			return false
		},
		onRemove: file => {
			setData(prevData => ({
				...prevData,
				files: prevData.files.filter(f => f.uid !== file.uid)
			}))
		}
	}

	const handleSubmit = async () => {
		try {
			if (data.receiver === '') {
				throw new Error('Please select a reviewer')
			}
			const res = await sendRequest(
				{
					...data,
					sender: dataUser._id,
					name: dataUser.fullName
				},
				error => {
					throw error
				}
			)

			const container = {
				...data,
				sender: dataUser._id,
				name: dataUser.fullName,
				idRequest: res.data._id
			}

			if (res.message === 'success!') {
				socket.emit('createRequest', container)
				toast.success('Gửi thành công!')
			}
		} catch (error) {
			console.log(error)
			toast.error(error?.message || 'An error occurred during the api call')
			toast.error(error.response?.data?.message || 'An error occurred during the api call')

			if (error.response.data.message && Array.isArray(error.response.data.message)) {
				error.response.data.message.forEach(errorMessage => {
					toast.error(errorMessage)
				})
			}
		}
	}

	useEffect(() => {
		const data = []
		list.forEach(element => {
			data.push({
				key: element.key,
				label: element.name,
				value: element.key
			})
		})
		setListReviewer(data)
	}, [list])

	return (
		<div className={`${styles.Submit}`}>
			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>Tiêu đề:</h6>
			<Input
				placeholder="Nhập vào"
				value={data.title}
				onChange={e =>
					setData({
						...data,
						title: e.target.value
					})
				}
				className="input"
			/>
			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>Reviewer:</h6>
			<Cascader
				options={listReviewer}
				onChange={onChangeReciever}
				maxTagCount="responsive"
				defaultValue="Please choose"
			/>
			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>Hiển thị:</h6>
			<Cascader options={optionsStatus} onChange={onChangeStatus} maxTagCount="responsive" defaultValue={['private']} />

			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>Mô tả:</h6>
			<TextArea placeholder="Nhập vào" onChange={e => onChangedescription(e)} rows={4} />

			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>File đính kèm:</h6>
			<Upload {...props}>
				<Button icon={<UploadOutlined />}>Upload</Button>
			</Upload>

			<Button className="btn" size="large" onClick={handleSubmit}>
				Gửi
			</Button>
		</div>
	)
}

Submit.propTypes = {}

export default Submit
