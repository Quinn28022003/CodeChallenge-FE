import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	showNav: false
}

const slice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setShowNav: (state, action) => ({
			...state,
			showNav: action.payload
		})
	}
})

export const navigationActions = slice.actions
export const navigationReducer = slice.reducer
