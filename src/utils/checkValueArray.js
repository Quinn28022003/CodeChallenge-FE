import { toast } from 'react-toastify'

export const checkValueArray = (arr, value) => {
	let check = false
	arr.forEach(element => {
		if (element === value) {
			check = true
			toast.error(`${value} already exist`)
		}
	})
	return check
}
