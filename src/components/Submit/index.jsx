import { Button, Cascader, DatePicker, Input, Upload } from 'antd'

import { UploadOutlined } from '@ant-design/icons'
import TextArea from 'antd/es/input/TextArea'
import { fontStyles } from '~/constants/fontStyles'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const optionsReviewer = [
	{
		key: '1',
		label: 'hoang quan',
		value: 'hoang quan'
	},
	{
		key: '2',
		label: 'tuan anh',
		value: 'tuan anh'
	},
	{
		key: '3',
		label: 'van khoi',
		value: 'van khoi'
	},
	{
		key: '4',
		label: 'linh dan',
		value: 'link dan'
	},
	{
		key: '5',
		label: 'quinn',
		value: 'quinn'
	}
]

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

const props = {
	action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
	onChange: ({ file, fileList }) => {
		if (file.status !== 'uploading') {
			console.log(file, fileList)
		}
	}
}

const Submit = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { innerWidth } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})

	const onChange = value => {
		console.log(value)
	}

	return (
		<div className={`${styles.Submit}`}>
			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>Tiêu đề:</h6>
			<Input placeholder="Nhập vào" className="input" />
			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>Reviewer:</h6>
			<Cascader
				options={optionsReviewer}
				onChange={onChange}
				multiple
				maxTagCount="responsive"
				defaultValue={['hoang quan']}
			/>
			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>Trạng thái:</h6>
			<Cascader options={optionsStatus} onChange={onChange} maxTagCount="responsive" defaultValue={['private']} />

			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>Mô tả:</h6>
			<TextArea placeholder="Nhập vào" rows={4} />
			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>Ngày:</h6>
			<DatePicker onChange={onChange} />
			<h6 className={`title ${fontStyles['headline-6-medium-20px']}`}>File đính kèm:</h6>
			<Upload {...props}>
				<Button icon={<UploadOutlined />}>Upload</Button>
			</Upload>
		</div>
	)
}

Submit.propTypes = {}

export default Submit
