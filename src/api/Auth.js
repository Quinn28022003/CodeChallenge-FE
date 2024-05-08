import axios from './AxiosConfig'

export const register = async (data, next) => {
	try {
		const response = await axios.post('/users/', data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return response.data
	} catch (error) {
		next(error)
	}
}

export const login = async (credentials, next) => {
	try {
		const response = await axios.post('/auth/login', credentials, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return response.data
	} catch (error) {
		next(error)
	}
}

export const verifyToken = async (userId, next) => {
	try {
		const response = await axios.post(`/auth/verify/${userId}`)
		return response.data
	} catch (error) {
		next(error)
	}
}
