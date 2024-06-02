import { Carousel, Skeleton } from 'antd'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getListReviewer } from '~/api/Reviewer/reviewer'
import useCallApiList from '~/hook/useCallApiList'
import useCommon from '~/hook/useCommon'
import useText from '~/hook/useText'
import Information from '../Information'
import useStyles from './styles'

const Reviewer = () => {
	const { styles } = useStyles()
	const { innerWidth } = useCommon()
	const [count, setCount] = useState(4)
	const { title } = useText()
	const onChange = currentSlide => {}
	const { list, isLoading } = useCallApiList(getListReviewer, 'reviewer')

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
				{isLoading === false ? (
					<>
						{list && list.length > 0 ? (
							<Carousel afterChange={onChange} slidesToShow={count} autoplay autoplaySpeed={4000} className="carousel">
								{list.map(element => (
									<div key={element.key}>
										<Link to={`/reviewer?userId=${element.key}`}>
											<Information
												isReviewer
												url={element.url}
												name={element.name}
												description={element.description ?? 'Người ẩn danh'}
											/>
										</Link>
									</div>
								))}
							</Carousel>
						) : (
							<div className="error">Chưa có dữ liệu</div>
						)}
					</>
				) : (
					<div className="comtainer-loading">
						<Skeleton active className="loading" />
						<Skeleton active className="loading" />
						<Skeleton active className="loading" />
						<Skeleton active className="loading" />
					</div>
				)}
			</div>
		</div>
	)
}

export default Reviewer
