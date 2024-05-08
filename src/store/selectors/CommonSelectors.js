import { createSelector } from '@reduxjs/toolkit'

const selectCommonBranch = state => state.common

const selectDarkMode = createSelector(selectCommonBranch, common => common.darkMode)
const selectInnerWidth = createSelector(selectCommonBranch, common => common.innerWidth)
const selectIsLoggedIn = createSelector(selectCommonBranch, common => common.isLoggedIn)
const selectPermission = createSelector(selectCommonBranch, common => common.permission)
const selectUserInfo = createSelector(selectCommonBranch, common => common.userInfo)

const CommonSelectors = {
	selectDarkMode,
	selectInnerWidth,
	selectIsLoggedIn,
	selectPermission,
	selectUserInfo
}

export default CommonSelectors
