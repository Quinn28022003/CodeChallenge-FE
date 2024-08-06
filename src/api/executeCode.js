import axios from 'axios'
import { LANGUAGE_VERSIONS } from '~/constants/language'

const API = axios.create({
	baseURL: 'https://emkc.org/api/v2/piston'
})

export const executeCode = async (sourceCode, language) => {
	try {
		const response = await API.post(
			'/execute',
			{
				language,
				version: LANGUAGE_VERSIONS[language],
				files: [
					{
						content: sourceCode
					}
				]
			},
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		return response.data
	} catch (error) {
		throw new Error(`${error.response.data.message}` || 'Internal Server Error')
	}
}
