import axios from '../_Configs/AxiosConfig'

export const check = async userId => {
	try {
		const response = await axios.get(`/connection/${userId}`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
