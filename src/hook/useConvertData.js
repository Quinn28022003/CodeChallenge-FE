import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import { decrypt } from '~/utils/decrypt'

const useConvertData = ({ userInfo }) => {
	const [dataUser, setDataUser] = useState()

	useEffect(() => {
		if (Object.keys(userInfo).length !== 0) {
			;(async () => {
				const decryptedData = await decrypt(userInfo, import.meta.env.VITE_SECRET_DATA)
				setDataUser(decryptedData)
			})()
		}
	}, [userInfo])

	return {
		dataUser
	}
}

useConvertData.proptype = {
	userInfo: PropTypes.func.isRequired
}

export default useConvertData
