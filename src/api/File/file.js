import axios from '../_Configs/AxiosConfig'

export const download = async path => {
	try {
		const response = await axios.post(
			'/files/download',
			{
				path
			},
			{
				responseType: 'blob'
			}
		)

		const blob = new Blob([response.data], {
			type: response.headers['content-type']
		})

		const link = document.createElement('a')
		link.href = window.URL.createObjectURL(blob)

		const fileName = path.split('/').pop()
		link.download = fileName
		document.body.appendChild(link)

		link.click()

		document.body.removeChild(link)
	} catch (error) {
		throw new Error(error.response?.data?.message || 'Internal Server Error')
	}
}
