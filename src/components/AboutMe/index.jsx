import { Space } from 'antd'

import useText from '~/hook/useText'
import useStyles from './styles'

const AboutMe = () => {
	const { styles } = useStyles()
	const { title, description } = useText()

	return (
		<div className={styles.AboutMe}>
			<Space className="container">
				<img src="/assets/images/homePage/pexels-photo-7414036.jpeg" alt="tư-duy" className="logo" />
				<Space className="content">
					<h3 className={`title ${title}`}>Lựa chọn chúng tôi bạn sẽ nâng cao tư duy về lập trình của bạn mỗi ngày</h3>
					<h5 className={`description ${description}`}>
						Dễ dàng nắm bắt các khái niệm phức tạp, khuyến khích sự sáng tạo và tự tin trong việc giải quyết các vấn đề
						kỹ thuật - đó là những gì bạn có thể kỳ vọng khi chọn chúng tôi để nâng cao tư duy về lập trình hàng ngày.
					</h5>
				</Space>
			</Space>
		</div>
	)
}

export default AboutMe
