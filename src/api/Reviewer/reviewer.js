import axios from '../_Configs/AxiosConfig'

export const getListReviewer = async () => {
	try {
		const response = await axios.get('/reviewer?role=reviewer')
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}

export const getdetailReviewer = async idUser => {
	try {
		const response = await axios.get(`/reviewer/${idUser}`)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
