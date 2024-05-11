import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { verifyToken } from '~/api/Auth'
import useCommon from '~/hook/useCommon'
import useLoading from '~/hook/useLoading'

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

					handleChangePermission(res.data.user.role)
					handleChangeIsLoggedIn(res.data.isLoggedIn)
					handleChangeUserInfo(res.data.user)
				} catch (error) {
					toast.success(error.response.data.error.message)
					handleChangeLoading('/login', 300)
					Cookies.remove('accessToken')
				}
			}
		})()
	}, [dispatch, handleChangeIsLoggedIn, handleChangeLoading, handleChangePermission, handleChangeUserInfo, token])

	return null
}

RestoreLogin.propTypes = {
	handleChangeLoading: PropTypes.func.isRequired
}

export default RestoreLogin
