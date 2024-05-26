import { Skeleton, Table, Tag } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { getListChallenge } from '~/api/Challenge/challenge'
import useCallApiList from '~/hook/useCallApiList'
import useCommon from '~/hook/useCommon'
import useDarkMode from '~/hook/useDarkMode'
import useText from '~/hook/useText'
import useStyles from './styles'

const customColors = ['geekblue', 'green', 'volcano', 'blue', 'purple', 'magenta']

const getColor = index => customColors[index % customColors.length]

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
		render: (text, record) => <Link to={`/practice/${record.key}`}>{text}</Link>,
		sorter: (a, b) => a.title.localeCompare(b.title)
	},
	{
		title: 'Ngôn ngữ',
		dataIndex: 'language',
		key: 'language',
		render: languages => (
			<span>
				{languages.map((language, index) => {
					let color = getColor(index)
					if (language === 'loser') {
						color = 'volcano'
					}
					return (
						<Tag color={color} key={language}>
							{language.toUpperCase()}
						</Tag>
					)
				})}
			</span>
		)
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
				{topics.map((topic, index) => {
					let color = getColor(index)
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

const Challenge = ({ isTitle }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { innerWidth } = useCommon()
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth
	})
	const { title } = useText()
	const { list, isLoading } = useCallApiList(getListChallenge, 'challenge')

	const onChange = async (pagination, filters, sorter, extra) => {
		console.log('pagination: ', pagination)
		console.log('filters: ', filters)
		console.log('sorter: ', sorter)
		console.log('extra: ', extra)
	}

	return (
		<div className={`${styles.Challenge}`}>
			<div className="container">
				{isTitle === true ? <h2 className={`title ${title}`}>Danh sách thử thách</h2> : null}
				{isLoading === false ? (
					<>
						{list && list.length > 0 ? (
							<Table
								className="table"
								size={innerWidth < 576 ? 'small' : 'middle'}
								columns={columns}
								pagination={{
									pageSize: 16,
									position: ['bottomCenter']
								}}
								dataSource={list}
								onChange={onChange}
							/>
						) : (
							<Table
								className="table"
								size={innerWidth < 576 ? 'small' : 'middle'}
								columns={columns}
								pagination={{
									pageSize: 16,
									position: ['bottomCenter']
								}}
								dataSource={[]}
								onChange={onChange}
							/>
						)}
					</>
				) : (
					<div className="comtainer-loading">
						<Skeleton active className="loading" />
						<Skeleton active className="loading" />
						<Skeleton active className="loading" />
					</div>
				)}
			</div>
		</div>
	)
}

Challenge.propTypes = {
	isTitle: PropTypes.bool
}

export default Challenge
