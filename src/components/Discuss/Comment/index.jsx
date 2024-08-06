import { HeartOutlined, MessageOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'

import useCommon from '~/hook/useCommon'
import useStyles from './styles'

const Comment = () => {
	const { innerWidth } = useCommon()
	const { styles } = useStyles({
		innerWidth
	})
	return (
		<div className={`${styles.Comment}`}>
			<img src="/assets/images/test.png" alt="" className="image" />
			<div className="content">
				<span className="name">Hoàng Quân</span>
				<span className="date">28-02-2024</span>
				<p className="description">
					Bài của bạn giải rất hay, mình đã học hỏi rất nhiều từ phương áp của bạn và đã áp dụng thành công vào thực tế.
				</p>
				<Space className="container-button">
					<Button className="btn-heart" type="text" icon={<HeartOutlined />}>
						1
					</Button>
					<Button className="btn-comment" type="text" icon={<MessageOutlined />}>
						2
					</Button>
					<Button className="btn-feedback" type="text">
						Phản hồi
					</Button>
				</Space>
			</div>
		</div>
	)
}

export default Comment
