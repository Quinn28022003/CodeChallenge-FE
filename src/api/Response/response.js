import axios from '../_Configs/AxiosConfig'

export const getResponse = async userId => {
	try {
		const response = await axios.get(`/response/${userId}`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const sendFeedback = async data => {
	try {
		const response = await axios.post(`/response`, data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
