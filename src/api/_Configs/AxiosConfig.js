import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://localhost:2802',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json'
	}
})

instance.defaults.withCredentials = true

instance.interceptors.request.use(
	config => config,
	error => Promise.reject(error)
)

instance.interceptors.response.use(
	response => response,
	error => Promise.reject(error)
)

export default instance
