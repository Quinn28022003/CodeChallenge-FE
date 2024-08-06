import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import { check } from '~/api/connection'
import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const UserItem = ({ handleGetIdUser, name, url, userId, activeUser }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	const [IsCheck, setIsCheck] = useState(false)

	useEffect(() => {
		if (userId) {
			;(async () => {
				try {
					const res = await check(userId)
					if (res.data) {
						setIsCheck(true)
					}
				} catch (e) {
					console.log('Error: ', e)
				}
			})()
		}
	}, [userId])

	return (
		<div
			className={`${styles.UserItem} ${activeUser === userId ? 'active' : ''}`}
			onClick={() => handleGetIdUser(userId)}
		>
			<span className={`dot ${IsCheck === false ? '' : 'active'}`}>•</span>
			<img src={`data:image/png;base64,${url}`} alt="" className="image" />
			<div className="content-text">
				<h6 className={`text ${fontStyles['subtitle-1']}`}>{name}</h6>
				<p className={`description ${fontStyles['subtitle-2']}`}> {IsCheck === false ? 'Ngoại tuyến' : 'Trực tuyến'}</p>
			</div>
		</div>
	)
}

UserItem.propTypes = {
	handleGetIdUser: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
	activeUser: PropTypes.string.isRequired
}

export default UserItem
