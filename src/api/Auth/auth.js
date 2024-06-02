import axios from '../_Configs/AxiosConfig'

export const register = async data => {
	try {
		const response = await axios.post('/users/', data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const login = async credentials => {
	try {
		const response = await axios.post('/auth/login', credentials, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return response.data
	} catch (error) {
		throw new Error(`${error?.response?.data?.error?.message}` || 'Internal Server Error')
	}
}

export const changePassword = async data => {
	try {
		const response = await axios.post('/auth/changePassword', data)
		return response.data
	} catch (error) {
		throw new Error(`${error?.response?.data?.error?.message}` || 'Internal Server Error')
	}
}

export const verifyToken = async userId => {
	try {
		const response = await axios.post(`/auth/verify/${userId}`)
		return response.data
	} catch (error) {
		throw new Error(`${error?.response?.data?.message}` || 'Internal Server Error')
	}
}
