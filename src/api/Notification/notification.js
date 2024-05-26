import axios from '../_Configs/AxiosConfig'

export const getNotification = async userId => {
	try {
		const response = await axios.get(`/notification/${userId}`)
		return response.data.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const deleteNotification = async idNotification => {
	try {
		const response = await axios.delete(`/notification/${idNotification}`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
