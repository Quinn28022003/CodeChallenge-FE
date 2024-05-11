import axios from './AxiosConfig'

export const downloadFile = async (data, next) => {
	try {
		const response = await axios.post('/files/download', {
			responseType: 'blob'
		})
		return response.data
	} catch (error) {
		next(error)
	}
}
