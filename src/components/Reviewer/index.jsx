import { Carousel } from 'antd'

import { useEffect, useState } from 'react'
import useCommon from '~/hook/useCommon'
import useText from '~/hook/useText'
import Information from '../Information'
import useStyles from './styles'

const list = [
	{
		key: 102,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 103,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 104,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 105,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 107,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	},
	{
		key: 108,
		url: '/assets/images/test.png',
		name: 'Hà Hoàng Quân',
		description: 'Thích đánh đàn dưới trời mưa'
	}
]

const Reviewer = () => {
	const { styles } = useStyles()
	const { innerWidth } = useCommon()
	const [count, setCount] = useState(4)
	const { title } = useText()
	const onChange = currentSlide => {}

	useEffect(() => {
		if (innerWidth > 1200) {
			setCount(4)
		} else if (innerWidth < 1200 && innerWidth > 992) {
			setCount(4)
		} else if (innerWidth < 992 && innerWidth > 768) {
			setCount(3)
		} else if (innerWidth < 768 && innerWidth > 576) {
			setCount(2)
		} else {
			setCount(1)
		}
	}, [innerWidth])

	return (
		<div className={`${styles.Reviewer}`}>
			<div className="content">
				<h3 className={`title ${title}`}>Các reviewer có trong hệ thông</h3>
				<Carousel afterChange={onChange} slidesToShow={count} autoplay autoplaySpeed={4000} className="carousel">
					{list &&
						list.length > 0 &&
						list.map((element, index) => (
							<div key={element.key}>
								<Information isReviewer url={element.url} name={element.name} description={element.description} />
							</div>
						))}
				</Carousel>
			</div>
		</div>
	)
}

export default Reviewer
