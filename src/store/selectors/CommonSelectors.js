import { createSelector } from '@reduxjs/toolkit'

const selectCommonBranch = state => state.common

const selectDarkMode = createSelector(selectCommonBranch, common => common.darkMode)
const selectInnerWidth = createSelector(selectCommonBranch, common => common.innerWidth)

const CommonSelectors = {
	selectDarkMode,
	selectInnerWidth
}

export default CommonSelectors
