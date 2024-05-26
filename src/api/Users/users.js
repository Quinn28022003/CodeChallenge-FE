import axios from '../_Configs/AxiosConfig'

export const getUserDetail = async userId => {
	try {
		const response = await axios.get(`/users/${userId}`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getFriends = async userId => {
	try {
		const response = await axios.get(`/users/friends/${userId}`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
