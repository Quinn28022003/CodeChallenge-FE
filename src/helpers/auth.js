import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { verifyToken } from '~/api/Auth'
import useCommon from '~/hook/useCommon'

const RestoreLogin = ({ handleChangeLoading }) => {
	const dispatch = useDispatch()
	const { handleChangeIsLoggedIn, handleChangePermission, handleChangeUserInfo } = useCommon()
	const token = Cookies.get('accessToken')

	useEffect(() => {
		;(async () => {
			if (token) {
				try {
					const decodedToken = jwtDecode(String(token))
					const data = await verifyToken(decodedToken.id, error => {
						throw error
					})

					handleChangePermission(data.user.role)
					handleChangeIsLoggedIn(data.isLoggedIn)
					handleChangeUserInfo(data.user)
					toast.success('Update information successful!')
				} catch (error) {
					toast.success('Please log in to receive new tokens!')
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
