import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import NavigationSelectors from '~/store/selectors/NavigationSelectors'
import { navigationActions } from '~/store/slices/NavigationSlice'

const useNavigation = () => {
	const dispatch = useDispatch()
	const showNav = useSelector(NavigationSelectors.selectShowNav)

	const handleChangeShowNav = useCallback(
		showNav => {
			dispatch(navigationActions.setShowNav(showNav))
		},
		[dispatch]
	)

	return {
		showNav,
		handleChangeShowNav
	}
}

export default useNavigation
