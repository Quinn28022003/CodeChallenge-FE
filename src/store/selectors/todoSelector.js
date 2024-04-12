import { createSelector } from '@reduxjs/toolkit'

const selectTodoBranch = state => state.todo

const selectTodos = createSelector(selectTodoBranch, todo => todo.todos)

const todoSelectors = {
	selectTodos
}

export default todoSelectors
