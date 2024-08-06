import CryptoJS from 'crypto-js'
import { toast } from 'react-toastify'

export const encrypt = async (data, secret) => {
	try {
		const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString()
		return ciphertext
	} catch (error) {
		toast.error('Error during encryption.')
		return null
	}
}
