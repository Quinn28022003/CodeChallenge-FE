import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useLoading = () => {
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const handleChangeLoading = (url, time) => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			navigate(`${url}`)
		}, time)
	}

	return {
		loading,
		handleChangeLoading
	}
}

export default useLoading
