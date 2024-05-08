import axios from 'axios'
import { LANGUAGE_VERSIONS } from '~/constants/language'

const API = axios.create({
	baseURL: 'https://emkc.org/api/v2/piston'
})

export const executeCode = async (sourceCode, language, next) => {
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
		next(error)
	}
}
