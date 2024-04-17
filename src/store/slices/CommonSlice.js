import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	innerWidth: window.innerWidth,
	darkMode: false
}

const slice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		handleChangeDarkMode: (state, action) => ({
			...state,
			darkMode: action.payload
		}),
		setInnerWidth: (state, action) => ({
			...state,
			innerWidth: action.payload
		})
	}
})

export const commonActions = slice.actions
export const commonReducer = slice.reducer
