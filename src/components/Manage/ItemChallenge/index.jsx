import { Button } from 'antd'
import PropTypes from 'prop-types'

import { fontStyles } from '~/constants/fontStyles'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const ItemChallenge = ({ user }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	return (
		<div className={`${styles.ItemChallenge}`}>
			<div className="container">
				<div className="content-challenge">
					<div className="content-title-challenge">
						<span className={`STT ${fontStyles['subtitle-1']}`}>1</span>
						<h6 className={` ${fontStyles['subtitle-1']}`}>Tìm phần tử lớn nhất trong mảng</h6>
						{user === true ? null : (
							<>
								<span className="date">28/02/2024</span>
							</>
						)}
					</div>
					<Button className="btn" type={`${darkModeLocalStorage === false ? 'primary' : ''}`}>
						Xem chi tiết
					</Button>
				</div>
				{user === true ? (
					<>
						<div className="content-user">
							{/* <img src={`data:image/png;base64,${url}`} alt="test" className="img" /> */}
							<img src={`/assets/images/test.png`} alt="test" className="img" />
							<h6 className={`text ${fontStyles['body-2']}`}>Tìm phần tử lớn nhất trong mảng</h6>
							<span className="date">28/02/2024</span>
						</div>
						<p className={`comment ${fontStyles.caption}`}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, suscipit. Ut porro quas animi harum enim,
							commodi pariatur eos distinctio? Expedita inventore beatae vero, doloremque ratione illo veniam pariatur
							incidunt!
						</p>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}

ItemChallenge.propTypes = {
	user: PropTypes.bool
}

export default ItemChallenge
