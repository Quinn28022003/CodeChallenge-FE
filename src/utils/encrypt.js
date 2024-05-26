import CryptoJS from 'crypto-js'

export const encrypt = async (data, secret) => {
	const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString()
	return ciphertext
}
