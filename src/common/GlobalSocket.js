import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { io } from 'socket.io-client'
import { v4 as uuidv4 } from 'uuid'

let socketInstance = null

const globalSocket = url => {
	if (socketInstance) {
		return socketInstance
	}

	try {
		let userUUID = localStorage.getItem('userUUID')
		if (!userUUID) {
			userUUID = uuidv4()
			localStorage.setItem('userUUID', userUUID)
		}
		const token = Cookies.get('accessToken')

		if (token) {
			const decodedToken = jwtDecode(String(token))
			socketInstance = io(url, {
				extraHeaders: {
					jwt: `${token}`,
					userid: decodedToken.id,
					useruuid: userUUID
				},
				withCredentials: true
			})
			return socketInstance
		} else {
			socketInstance = io(url, {
				extraHeaders: {
					useruuid: userUUID
				},
				withCredentials: true
			})
			return socketInstance
		}
	} catch (error) {
		console.error('Error decoding token:', error)
	}
}

export default globalSocket
