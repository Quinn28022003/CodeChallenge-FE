import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { todoReducer } from './slices/todoSlice'

const store = configureStore({
	reducer: combineReducers({
		todo: todoReducer
	})
})

export default store
