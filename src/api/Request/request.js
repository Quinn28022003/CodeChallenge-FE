import axios from '../_Configs/AxiosConfig'

export const getRequestUser = async userId => {
	try {
		const response = await axios.get(`/request/byReceiver/${userId}`)
		console.log('response: ', response)
		return response.data.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const sendRequest = async data => {
	try {
		console.log('data: ', data)
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
