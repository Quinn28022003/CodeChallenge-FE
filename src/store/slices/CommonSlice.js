import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from '~/api/_AxiosConfig'
import { Role } from '~/constants/role'

export const fetchUserDetail = createAsyncThunk('common/fetchUserDetail', async (userId, thunkAPI) => {
	try {
		const response = await axios.get(`/users/${userId}`)
		return response.data.data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data)
	}
})

const initialState = {
	innerWidth: window.innerWidth,
	darkMode: false,
	isLoggedIn: false,
	permission: Role.NORMAL,
	userInfo: {},
	loading: 'idle',
	error: ''
}

const slice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		handleChangeDarkMode: (state, action) => {
			state.darkMode = action.payload
		},
		setInnerWidth: (state, action) => {
			state.innerWidth = action.payload
		},
		setIsloggedIn: (state, action) => {
			state.isLoggedIn = action.payload
		},
		setPermission: (state, action) => {
			state.permission = action.payload
		},
		setUserInfo: (state, action) => {
			state.userInfo = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUserDetail.pending, state => {
				state.loading = 'pending'
			})
			.addCase(fetchUserDetail.fulfilled, (state, action) => {
				state.loading = 'success'
				state.userInfo = action.payload
			})
			.addCase(fetchUserDetail.rejected, (state, action) => {
				state.loading = 'error'
				state.error = action.payload
			})
	}
})

export const commonActions = slice.actions
export const commonReducer = slice.reducer
