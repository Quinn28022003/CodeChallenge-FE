import { combineReducers, configureStore } from '@reduxjs/toolkit'

import resizeMiddleware from './middlewares/resizeMiddleware'
import { commonReducer } from './slices/CommonSlice'
import { navigationReducer } from './slices/NavigationSlice'

const store = configureStore({
	reducer: combineReducers({
		common: commonReducer,
		navigation: navigationReducer
	}),
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(resizeMiddleware)
})

export default store
