import { Button, Table } from 'antd'

import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const listTopic = ['array', 'hash table']

const listRestriction = [
	'2 <= nums.length <= 104',
	'-109 <= nums[i] <= 109',
	'-109 <= target <= 109',
	'Chỉ có một câu trả lời hợp lệ tồn tại.'
]

const columns = [
	{
		title: 'Đầu vào',
		dataIndex: 'input',
		key: 'input'
	},
	{
		title: 'Đầu ra',
		dataIndex: 'output',
		key: 'output'
	}
]

const data = [
	{
		key: '1',
		input: `nums = [2,7,11,15], 
		target = 9`,
		output: '[0,1]'
	},
	{
		key: '2',
		input: `nums = [3,2,4], 
		target = 6`,
		output: '[1,2]'
	},
	{
		key: '3',
		input: `nums = [3,3], 
		target = 6`,
		output: '[0,1]'
	}
]

const Topic = () => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})

	return (
		<div className={`${styles.Topic}`}>
			<h4 className={`title ${fontStyles['headline-4-regular-34px']}`}>1. Hai tổng</h4>
			<Button className="btn-difficult" size="small">
				Cơ Bản
			</Button>
			<h6 className={`topic ${fontStyles['headline-6-medium-20px']}`}>Topic:</h6>
			<div className="container-topic">
				{listTopic &&
					listTopic.length > 0 &&
					listTopic.map((element, index) => (
						<Button size="small" className="btn-topic" key={index}>
							{element}
						</Button>
					))}
			</div>
			<h6 className={`topic ${fontStyles['headline-6-medium-20px']}`}>Mô tả:</h6>
			<p className={`description ${fontStyles.caption}`}>Đầu ra: 1 mảng số nguyên.</p>
			<p className={`description ${fontStyles.caption}`}>
				Cho một mảng các số nguyên và một số nguyên đích, trả về chỉ số của hai số sao cho chúng cộng lại với đích.
			</p>
			<p className={`description ${fontStyles.caption}`}>
				Bạn có thể giả định rằng mỗi đầu vào sẽ có chính xác một giải pháp và bạn không được sử dụng cùng một phần tử
				hai lần.
			</p>
			<p className={`description ${fontStyles.caption}`}>Bạn có thể trả lời câu trả lời theo bất kỳ thứ tự nào.</p>

			<h6 className={`topic ${fontStyles['headline-6-medium-20px']}`}>Dữ liệu:</h6>
			<p className={`description ${fontStyles.caption}`}>Đầu vào: 1 mảng số nguyên và 1 số nguyên bất kỳ.</p>
			<h6 className={`topic ${fontStyles['headline-6-medium-20px']}`}>Ví dụ:</h6>
			<Table columns={columns} pagination={false} dataSource={data} className="table" />
			<h6 className={`topic ${fontStyles['headline-6-medium-20px']}`}>Hạn Chế:</h6>
			<ul className="list-restriction">
				{listRestriction &&
					listRestriction.length > 0 &&
					listRestriction.map((element, index) => (
						<li className={`description item ${fontStyles.caption}`} key={index}>
							{element}
						</li>
					))}
			</ul>
		</div>
	)
}

Topic.propTypes = {}

export default Topic
