import axios from '../_Configs/AxiosConfig'

export const getUserDetail = async userId => {
	try {
		const response = await axios.get(`/users/${userId}`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getQuantityTotal = async () => {
	try {
		const response = await axios.get(`/users/quantity`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getQuantityOnline = async () => {
	try {
		const response = await axios.get(`/users/quantity/online?online=true`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getQuantityOffline = async () => {
	try {
		const response = await axios.get(`/users/quantity/offline?online=false`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getQuantityReviewer = async () => {
	try {
		const response = await axios.get(`/users/quantity/byField?role=reviewer`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getQuantityStudent = async () => {
	try {
		const response = await axios.get(`/users/quantity/byField?role=student`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getlatestUser = async () => {
	try {
		const response = await axios.get(`/users/sort?field=createdAt&sort=DESC&limit=6`)
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

export const update = async (userId, data) => {
	try {
		const response = await axios.put(`/users/${userId}`, data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
