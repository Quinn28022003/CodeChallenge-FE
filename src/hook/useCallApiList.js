import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useCallApiList = (api, name) => {
	const [list, setList] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		;(async () => {
			try {
				const res = await api()
				const data = []
				if (res && res.data) {
					switch (name) {
						case 'challenge': {
							res.data.forEach((element, index) => {
								data.push({
									key: index + 1,
									title: element.title,
									language: element.language,
									status: 'active',
									difficult: element.difficulty,
									topics: element.topic
								})
							})
							break
						}

						case 'reviewer': {
							res.data.forEach(element => {
								data.push({
									key: element._id,
									url: element.imagePath,
									name: element.lastName + ' ' + element.firstName,
									description: element.description
								})
							})
							break
						}
					}

					setList(data)
					setIsLoading(false)
				}
			} catch (error) {
				setIsLoading(false)
				toast.error(error.message)
			}
		})()
	}, [name, api])

	return {
		list,
		isLoading
	}
}

export default useCallApiList
