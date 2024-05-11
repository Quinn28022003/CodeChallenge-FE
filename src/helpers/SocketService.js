import io from 'socket.io-client'

class SocketService {
	constructor() {
		this.socket = null
		this.url = 'http://localhost:2802'
	}

	connect() {
		if (!this.socket) {
			this.socket = io(this.url)
			this.socket.on('connect', () => {
				console.log('Connected to server')
			})
		}
	}

	disconnect() {
		if (this.socket) {
			this.socket.disconnect()
			this.socket = null
			console.log('Disconnected from server')
		}
	}

	getSocket() {
		return this.socket
	}
}

const socketService = new SocketService()
export default socketService
