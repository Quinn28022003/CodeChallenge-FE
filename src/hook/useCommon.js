import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CommonSelectors from '~/store/selectors/CommonSelectors'
import { commonActions } from '~/store/slices/CommonSlice'

const useCommon = () => {
	const dispatch = useDispatch()
	const darkMode = useSelector(CommonSelectors.selectDarkMode)
	const innerWidth = useSelector(CommonSelectors.selectInnerWidth)

	const handleChangeDarkMode = useCallback(
		darkMode => {
			dispatch(commonActions.handleChangeDarkMode(darkMode))
		},
		[dispatch]
	)

	return {
		darkMode,
		innerWidth,
		handleChangeDarkMode
	}
}

export default useCommon
