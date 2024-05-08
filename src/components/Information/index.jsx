import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import { fontStyles } from '~/constants/fontStyles'
import useStyles from './styles'

const Information = ({ isReviewer, isReviewerPage, url, name, description }) => {
	const [reviewer, setIsReviewer] = useState(false)
	const [reviewerPage, setIsReviewerPage] = useState(false)
	const { styles } = useStyles({
		reviewer,
		reviewerPage
	})

	useEffect(() => {
		if (isReviewer) {
			setIsReviewer(true)
		}

		if (isReviewerPage) {
			setIsReviewerPage(true)
		}
	}, [isReviewer, isReviewerPage])

	return (
		<div className={styles.Information}>
			<img src={url} alt="test" className="img" />
			<div>
				<h5 className={`text ${fontStyles['subtitle-1']}`}>{name}</h5>
				<p className={`description ${fontStyles['subtitle-2']}`}>{description}</p>
			</div>
		</div>
	)
}

Information.propTypes = {
	isReviewer: PropTypes.bool,
	isReviewerPage: PropTypes.bool,
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}

export default Information
