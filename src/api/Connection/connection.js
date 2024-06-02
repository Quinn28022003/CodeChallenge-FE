import axios from '../_Configs/AxiosConfig'

export const getTotalConnection = async () => {
	try {
		const response = await axios.get(`/connection/total`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getAccount = async () => {
	try {
		const response = await axios.get(`/connection/account`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getNotAccount = async () => {
	try {
		const response = await axios.get(`/connection/notAccount`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const check = async userId => {
	try {
		const response = await axios.get(`/connection/${userId}`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
