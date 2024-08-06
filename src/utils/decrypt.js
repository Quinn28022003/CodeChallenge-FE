import CryptoJS from 'crypto-js'
import { toast } from 'react-toastify'

export const decrypt = (data, secret) => {
	try {
		const bytes = CryptoJS.AES.decrypt(data, secret)
		const decryptedString = bytes.toString(CryptoJS.enc.Utf8)

		if (!decryptedString) {
			throw new Error('Decryption failed or resulted in an empty string.')
		}

		const decryptedData = JSON.parse(decryptedString)
		return decryptedData
	} catch (error) {
		toast.error('Error during decryption or JSON parsing.')
		return null
	}
}
