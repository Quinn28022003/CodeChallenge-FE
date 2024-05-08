import { useEffect, useState } from 'react'

import useCommon from './useCommon'

const useDarkMode = () => {
	const { darkMode, handleChangeDarkMode } = useCommon()
	const [darkModeLocalStorage, setDarkModeLocalStorage] = useState(() => {
		const storedDarkMode = localStorage.getItem('darkMode')
		return storedDarkMode ? JSON.parse(storedDarkMode) : false
	})

	useEffect(() => {
		const storedDarkMode = localStorage.getItem('darkMode')
		handleChangeDarkMode(JSON.parse(storedDarkMode))
		setDarkModeLocalStorage(storedDarkMode ? JSON.parse(storedDarkMode) : false)
	}, [darkMode, handleChangeDarkMode])

	return {
		darkModeLocalStorage
	}
}

export default useDarkMode
