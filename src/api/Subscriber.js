import axios from './AxiosConfig'

export const Subscriber = async (data, next) => {
	try {
		const response = await axios.post('/subscriber', data, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		return response
	} catch (error) {
		next(error)
	}
}
