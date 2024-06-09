import axios from '../_Configs/AxiosConfig'

export const getRequestUser = async data => {
	try {
		const response = await axios.get(`/request/byField?receiver=${data.receiver}&status=${data.status}`)
		return response.data.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getRequestDetail = async id => {
	try {
		const response = await axios.get(`/request/${id}`)
		return response.data.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getRequestDeleted = async userId => {
	try {
		const response = await axios.get(`/request/deleted/${userId}`)
		return response.data.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getRequestLatest = async userId => {
	try {
		const response = await axios.get(`/request/latest/${userId}`)
		return response.data.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const sendRequest = async data => {
	try {
		const response = await axios.post('/request', data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
