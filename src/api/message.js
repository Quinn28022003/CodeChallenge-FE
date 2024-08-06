import axios from './_AxiosConfig'

export const getMessageByUser = async data => {
	try {
		const response = await axios.get(`/message?sender=${data.sender}&receiver=${data.receiver}`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
