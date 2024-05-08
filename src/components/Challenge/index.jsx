import { Table, Tag } from 'antd'
import Prototypes from 'prop-types'

import { Link } from 'react-router-dom'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useText from '~/hook/useText'
import useStyles from './styles'

const columns = [
	{
		title: 'STT',
		dataIndex: 'key',
		key: 'key',
		sorter: (a, b) => a.key - b.key
	},
	{
		title: 'Tiêu Đề',
		dataIndex: 'title',
		key: 'title',
		render: (text, record) => <Link to={`/challenge/${record.key}`}>{text}</Link>,
		sorter: (a, b) => a.title.localeCompare(b.title)
	},
	{
		title: 'Ngôn ngữ',
		dataIndex: 'language',
		key: 'language'
	},
	{
		title: 'Trạng thái',
		dataIndex: 'status',
		key: 'status'
	},
	{
		title: 'Độ khó',
		dataIndex: 'difficult',
		key: 'difficult',
		render: difficult => {
			let color = ''

			switch (difficult) {
				case 'easy': {
					color = 'green'
					break
				}
				case 'medium': {
					color = 'geekblue'
					break
				}
				case 'hard': {
					color = 'volcano'
					break
				}
			}
			return (
				<span>
					<Tag color={color} key={difficult}>
						{difficult.toUpperCase()}
					</Tag>
				</span>
			)
		}
	},
	{
		title: 'Chủ đề',
		dataIndex: 'topics',
		key: 'topics',
		render: topics => (
			<span>
				{topics.map(topic => {
					let color = topic.length > 5 ? 'geekblue' : 'green'
					if (topic === 'loser') {
						color = 'volcano'
					}
					return (
						<Tag color={color} key={topic}>
							{topic.toUpperCase()}
						</Tag>
					)
				})}
			</span>
		)
	}
]

const data = [
	{
		key: '1',
		title: 'Tính tổng hai số',
		language: 'Javascript',
		status: 'active',
		difficult: 'easy',
		topics: ['array1', 'tag1']
	},
	{
		key: '2',
		title: 'Jim Green',
		language: 'Javascript',
		status: 'inactive',
		difficult: 'hard',
		topics: ['array2', 'tag2']
	},
	{
		key: '3',
		title: 'Joe Black',
		language: 'Javascript',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '4',
		title: 'Joe Black',
		language: 'Javascript',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '5',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '6',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '7',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'medium',
		topics: ['array3', 'tag3']
	},
	{
		key: '8',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '9',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '10',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '11',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '12',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '13',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '14',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '15',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	},
	{
		key: '16',
		title: 'Joe Black',
		language: 'Sydney No. 1 Lake Park',
		status: 'active',
		difficult: 'easy',
		topics: ['array3', 'tag3']
	}
]

const Challenge = isTitle => {
	const { darkModeLocalStorage } = useDarkMode()
	const { innerWidth } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const { title } = useText()
	const onChange = (pagination, filters, sorter, extra) => {
		console.log('pagination: ', pagination)
		console.log('filters: ', filters)
		console.log('sorter: ', sorter)
		console.log('extra: ', extra)
	}

	return (
		<div className={`${styles.Challenge}`}>
			<div className="container">
				{isTitle === true ? <h2 className={`title ${title}`}>Danh sách thử thách</h2> : null}

				<Table
					className="table"
					size={innerWidth < 576 ? 'small' : 'middle'}
					columns={columns}
					pagination={{
						pageSize: 16,
						position: ['bottomCenter']
					}}
					dataSource={data}
					onChange={onChange}
				/>
			</div>
		</div>
	)
}

Challenge.prototype = {
	isTitle: Prototypes.bool
}

export default Challenge
