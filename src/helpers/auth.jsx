import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { verifyToken } from '~/api/Auth/auth'
import useCommon from '~/hook/useCommon'
import useLoading from '~/hook/useLoading'
import { decrypt } from '~/utils/decrypt'

const RestoreLogin = () => {
	const dispatch = useDispatch()
	const { handleChangeLoading } = useLoading()
	const { handleChangeIsLoggedIn, handleChangePermission, handleChangeUserInfo } = useCommon()
	const token = Cookies.get('accessToken')

	useEffect(() => {
		;(async () => {
			if (token) {
				try {
					const decodedToken = jwtDecode(String(token))
					const res = await verifyToken(decodedToken.id, error => {
						throw error
					})

					const decryptedData = await decrypt(res.data.userReal, import.meta.env.VITE_SECRET_DATA)
					handleChangePermission(decryptedData.role)
					handleChangeIsLoggedIn(res.data.isLoggedIn)
					handleChangeUserInfo(res.data.userReal)
				} catch (error) {
					console.log(error)
					handleChangeLoading('/login', 300)
					Cookies.remove('accessToken')
				}
			}
		})()
	}, [dispatch, handleChangeIsLoggedIn, handleChangePermission, handleChangeUserInfo, token])

	return null
}

export default RestoreLogin
