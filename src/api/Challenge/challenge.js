import axios from '../_Configs/AxiosConfig'

export const getListChallenge = async () => {
	try {
		const response = await axios.get('/challenge')
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
