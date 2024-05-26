import axios from '../_Configs/AxiosConfig'

export const Subscriber = async data => {
	try {
		const response = await axios.post('/subscriber', data, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return response
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
