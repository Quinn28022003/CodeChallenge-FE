import { commonActions } from '../slices/CommonSlice'

const resizeMiddleware = store => {
	let resizeTimer

	const handleResize = () => {
		clearTimeout(resizeTimer)
		resizeTimer = setTimeout(() => {
			store.dispatch(commonActions.setInnerWidth(window.innerWidth))
		}, 500)
	}

	window.addEventListener('resize', handleResize)

	return next => action => next(action)
}

export default resizeMiddleware
