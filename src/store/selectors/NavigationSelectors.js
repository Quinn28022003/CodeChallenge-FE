import { createSelector } from '@reduxjs/toolkit'

const selectNavigationBranch = state => state.navigation

const selectShowNav = createSelector(selectNavigationBranch, navigation => navigation.showNav)

const NavigationSelectors = {
	selectShowNav
}

export default NavigationSelectors
