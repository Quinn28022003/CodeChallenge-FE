import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	innerWidth: window.innerWidth,
	darkMode: false,
	isLoggedIn: false,
	permission: 'normal',
	userInfo: {}
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
		}),
		setIsloggedIn: (state, action) => ({
			...state,
			isLoggedIn: action.payload
		}),
		setPermission: (state, action) => ({
			...state,
			permission: action.payload
		}),
		setUserInfo: (state, action) => ({
			...state,
			userInfo: action.payload
		})
	}
})

export const commonActions = slice.actions
export const commonReducer = slice.reducer
