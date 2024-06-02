import axios from '../_Configs/AxiosConfig'

export const getTopics = async () => {
	try {
		const response = await axios.get('/challenge/quantity/topics')
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getLanguages = async () => {
	try {
		const response = await axios.get('/challenge/quantity/languages')
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getListChallenge = async () => {
	try {
		const response = await axios.get('/challenge')
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
