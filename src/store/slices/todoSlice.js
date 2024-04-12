import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	todos: []
}

const todoService = {
	fetchTodos: () => {}
}

const fetchTodos = createAsyncThunk('todo/fetchTodos', todoService.fetchTodos)

const slice = createSlice({
	name: 'todo',
	initialState,

	reducers: {},

	extraReducers: builder => {
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			state.todos = action.payload.todos
		})
	}
})

export const todoActions = slice.actions
export const todoAsyncActions = {
	fetchTodos
}

export const todoReducer = slice.reducer
