import { Col, Row, Statistic } from 'antd'
import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import { getLanguages, getTopics } from '~/api/Challenge/challenge'
import { getAccount, getNotAccount, getTotalConnection } from '~/api/Connection/connection'
import { getListReviewer } from '~/api/Reviewer/reviewer'
import {
	getQuantityOffline,
	getQuantityReviewer,
	getQuantityStudent,
	getQuantityTotal,
	getlatestUser
} from '~/api/Users/users'
import ItemResponse from '~/components/Response/Item'
import { fontStyles } from '~/constants/fontStyles'
import useCallApiList from '~/hook/useCallApiList'
import useDarkMode from '~/hook/useDarkMode'
import ItemChallenge from '../ItemChallenge'
import useStyles from './styles'

const Statistics = ({ user, challenge }) => {
	const { darkModeLocalStorage } = useDarkMode()
	const { styles } = useStyles({
		darkModeLocalStorage
	})
	const { list } = useCallApiList(getListReviewer, 'reviewer')
	const [dataConnection, setDataConnection] = useState({
		online: 0,
		offline: 0,
		totalUser: 0,
		account: 0,
		notAccount: 0,
		reviewer: 0,
		student: 0
	})
	const [dataUser, setDataUser] = useState([])
	const [topics, setTopics] = useState([])
	const [language, setLanguage] = useState([])

	useEffect(() => {
		;(async () => {
			try {
				const resOnline = await getTotalConnection()
				const resOffline = await getQuantityOffline()
				const resTotal = await getQuantityTotal()
				const resAccount = await getAccount()
				const resNotAccount = await getNotAccount()
				const resReviewer = await getQuantityReviewer()
				const resStudent = await getQuantityStudent()
				const resLatestUser = await getlatestUser()
				const resTopics = await getTopics()
				const resLanguages = await getLanguages()
				setLanguage(resLanguages.data)
				setTopics(resTopics.data)
				setDataUser(resLatestUser.data)
				setDataConnection({
					...dataConnection.data,
					online: resOnline.data,
					offline: resOffline.data,
					totalUser: resTotal.data,
					account: resAccount.data,
					notAccount: resNotAccount.data,
					reviewer: resReviewer.data,
					student: resStudent.data
				})
			} catch (e) {
				console.log('Error when calling api: ', e)
			}
		})()
	}, [])

	return (
		<div className={`${styles.Statistics}`}>
			{challenge === true ? (
				<>
					<Row className="statistics-row">
						<Col className="statistics-col" span={11}>
							<div className="statistic-Challenges">
								<Statistic className="statistic" title="Cơ bản" value={20000} />
								<Statistic title="Trung bình" value={1000} />
								<Statistic title="Khó" value={132} />
								<Statistic title="All" value={111} />
							</div>
						</Col>

						<Col className="statistics-col" span={11}>
							<div className="statistic-tags">
								{topics &&
									topics.length > 0 &&
									topics.map((element, index) =>
										index < 4 ? (
											<Statistic key={index} className="statistic" title={element.title} value={element.count} />
										) : null
									)}
							</div>
						</Col>
					</Row>
					<div className="statistic-tags">
						{topics &&
							topics.length > 0 &&
							topics.map((element, index) =>
								index > 4 ? (
									<Statistic key={index} className="statistic" title={element.title} value={element.count} />
								) : null
							)}
					</div>
					<div className="statistic-language">
						{language &&
							language.length > 0 &&
							language.map((element, index) => (
								<Statistic key={index} className="statistic" title={element.title} value={element.count} />
							))}
					</div>
				</>
			) : (
				<>
					<div className="statistic-connection">
						<Statistic className="statistic" title="Trực tuyến" value={dataConnection.online} />
						<Statistic title="Ngoại tuyến" value={dataConnection.offline} />
						<Statistic title="Có tài khoản" value={dataConnection.account} />
						<Statistic title="Khách hàng vãng lai" value={dataConnection.notAccount} />
					</div>
					<div className="statistic-role">
						<Statistic className="statistic" title="Reviewer" value={dataConnection.reviewer} />
						<Statistic title="Student" value={dataConnection.student} />
						<Statistic title="All" value={dataConnection.totalUser} />
					</div>
				</>
			)}
			<div className="reviewer-ratings">
				<h6 className={`title ${fontStyles['subtitle-1']}`}>
					{challenge === false ? 'Xếp hạng Reviewer' : 'Bài được đánh giá gần nhất'}
				</h6>
				<ul className="list">
					{challenge === false ? (
						<>
							{list && list.length > 0 ? (
								list.map(element => (
									<li className="item" key={element._id}>
										<ItemResponse
											manage={true}
											url={element.url}
											name={element.name}
											description={element.description}
										/>
									</li>
								))
							) : (
								<div className="error">Chưa có dữ liệu</div>
							)}
						</>
					) : (
						<>
							<ItemChallenge user />
						</>
					)}
				</ul>
			</div>
			<div className="create-the-latest-user">
				<h6 className={`title ${fontStyles['subtitle-1']}`}>
					{challenge === false ? 'Người dùng' : 'Thử thách'} mới tạo gần nhất
				</h6>
				<ul className="list">
					{challenge === false ? (
						<>
							{dataUser && dataUser.length > 0 ? (
								dataUser.map(element => (
									<li className="item" key={element._id}>
										<ItemResponse
											manage={true}
											url={element.imagePath}
											name={element.fullName}
											description={element.description}
										/>
									</li>
								))
							) : (
								<div className="error">Chưa có dữ liệu</div>
							)}
						</>
					) : (
						<>
							<ItemChallenge />
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

Statistics.propTypes = {
	user: PropTypes.bool,
	challenge: PropTypes.bool
}

export default Statistics
