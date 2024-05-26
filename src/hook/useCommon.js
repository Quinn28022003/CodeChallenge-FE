import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CommonSelectors from '~/store/selectors/CommonSelectors'
import { commonActions, fetchUserDetail } from '~/store/slices/CommonSlice'

const useCommon = () => {
	const dispatch = useDispatch()
	const darkMode = useSelector(CommonSelectors.selectDarkMode)
	const innerWidth = useSelector(CommonSelectors.selectInnerWidth)
	const isLoggedIn = useSelector(CommonSelectors.selectIsLoggedIn)
	const permission = useSelector(CommonSelectors.selectPermission)
	const userInfo = useSelector(CommonSelectors.selectUserInfo)

	const handleChangeDarkMode = useCallback(
		darkMode => {
			dispatch(commonActions.handleChangeDarkMode(darkMode))
		},
		[dispatch]
	)

	const handleChangeIsLoggedIn = useCallback(
		isLoggedIn => {
			dispatch(commonActions.setIsloggedIn(isLoggedIn))
		},
		[dispatch]
	)

	const handleChangePermission = useCallback(
		permission => {
			dispatch(commonActions.setPermission(permission))
		},
		[dispatch]
	)

	const handleChangeUserInfo = useCallback(
		userInfo => {
			dispatch(commonActions.setUserInfo(userInfo))
		},
		[dispatch]
	)

	const handleGetUserDetail = useCallback(
		userId => {
			dispatch(fetchUserDetail(userId))
		},
		[dispatch]
	)

	return {
		darkMode,
		innerWidth,
		isLoggedIn,
		permission,
		userInfo,
		handleChangeDarkMode,
		handleChangeIsLoggedIn,
		handleChangePermission,
		handleChangeUserInfo,
		handleGetUserDetail
	}
}

export default useCommon
