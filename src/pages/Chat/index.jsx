import { FileAddOutlined, FileImageOutlined, LeftOutlined, ProductOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, Input, Row } from 'antd'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { getMessageByUser } from '~/api/message'
import { getFriends } from '~/api/users'
import globalSocket from '~/common/GlobalSocket'
import Message from '~/components/Message'
import UserItem from '~/components/UserItem'
import useCommon from '~/hook/useCommon'
import useConvertData from '~/hook/useConvertData'
import useDarkMode from '~/hook/useDarkMode'
import useStyles from './styles'

const Chat = () => {
	const { innerWidth, userInfo } = useCommon()
	const socket = globalSocket(import.meta.env.VITE_SERVER)
	const { darkModeLocalStorage } = useDarkMode()
	const [showUserList, setShowUserList] = useState(false)
	const { styles } = useStyles({
		darkModeLocalStorage,
		innerWidth,
		showUserList
	})
	const [content, setContent] = useState()
	const [receiver, setReceiver] = useState()
	const { dataUser } = useConvertData({
		userInfo
	})
	const [friends, setFriends] = useState([])
	const [activeUser, setActiveUser] = useState()
	const [listMessage, setListMessage] = useState([])

	const handleOnclickShowUserList = () => setShowUserList(!showUserList)

	const handleSubmit = async () => {
		if (dataUser?._id) {
			if (content) {
				try {
					socket.emit('createMessage', {
						sender: dataUser._id,
						receiver,
						content
					})
					const res = await getMessageByUser({
						sender: dataUser._id,
						receiver
					})
					setListMessage(res.data)
					setContent('')
				} catch (e) {
					toast.error(e.message)
					console.log(e.message)
				}
			} else {
				toast.error('input cannot be empty!')
			}
		}
	}

	const handleGetIdUser = UserId => {
		setReceiver(UserId)
		setActiveUser(UserId)
	}

	useEffect(() => {
		socket.on('error-message', message => {
			toast.error(message)
		})

		socket.on('internal-server-error', message => {
			toast.error(message)
		})
	}, [socket])

	useEffect(() => {
		socket.on('newMessage', () => {
			if (dataUser?._id && receiver) {
				;(async () => {
					try {
						const res = await getMessageByUser({
							sender: dataUser._id,
							receiver
						})
						setListMessage(res.data)
					} catch (e) {
						toast.error(e.message)
						console.log(e.message)
					}
				})()
			}
		})
	}, [socket, dataUser, receiver])

	useEffect(() => {
		if (dataUser?._id && receiver) {
			;(async () => {
				try {
					const res = await getMessageByUser({
						sender: dataUser._id,
						receiver
					})
					setListMessage(res.data)
				} catch (e) {
					toast.error(e.message)
					console.log(e.message)
				}
			})()
		}
	}, [dataUser, receiver])

	useEffect(() => {
		if (dataUser?._id) {
			;(async () => {
				try {
					const res = await getFriends(dataUser._id)
					if (res.data.length > 0) {
						setFriends(res.data)
						setActiveUser(res.data[0]._id)
						setReceiver(res.data[0]._id)
					}
				} catch (e) {
					toast.error(e.message)
					console.log('Error: ', e)
				}
			})()
		}
	}, [dataUser])

	return (
		<div className={`${styles.Chat}`}>
			<Row className="row">
				<Col xs={21} sm={15} md={13} lg={9} xl={6} className="col">
					<div className="list">
						{friends &&
							friends.length > 0 &&
							friends.map(element => (
								<UserItem
									key={element._id}
									handleGetIdUser={handleGetIdUser}
									name={`${element.lastName} ${element.firstName}`}
									url={element.imagePath}
									userId={element._id}
									activeUser={activeUser}
								/>
							))}
					</div>
				</Col>
				<Col xs={24} sm={24} md={24} lg={14} xl={17} className="col">
					<div className="container">
						<Button
							onClick={handleOnclickShowUserList}
							type={`${darkModeLocalStorage === false ? '' : 'primary'}`}
							size="small"
							className="btn-show"
						>
							{showUserList === false ? <RightOutlined /> : <LeftOutlined />}
						</Button>
						<div className="content">
							<ul className="list-message">
								{listMessage &&
									listMessage.length > 0 &&
									listMessage.map(element => (
										<li className="item" key={element._id}>
											<Message
												itIsMe={element.sender === dataUser?._id}
												date={element.createdAt}
												time={element.time}
												content={element.content}
											/>
										</li>
									))}
							</ul>
							<div className="form">
								<Input
									placeholder="Nhập vào đây..."
									value={content}
									onChange={e => setContent(e.target.value)}
									className="input"
								/>
								<Button className="btn" onClick={handleSubmit}>
									Gửi
								</Button>
								{innerWidth < 576 ? (
									<Button className="btn">
										<ProductOutlined className="icon" />
									</Button>
								) : (
									<>
										<Button className="btn">
											<FileImageOutlined className="icon" />
										</Button>
										<Button className="btn">
											<FileAddOutlined className="icon" />
										</Button>
									</>
								)}
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Chat
