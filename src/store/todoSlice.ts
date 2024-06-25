import { createSlice } from '@reduxjs/toolkit'
import { ITodo } from '../types/types'
import { VisibleTodosType } from '../types/enums'

export interface ITodoState {
  todos: ITodo[]
  visibleTodos: VisibleTodosType
}

const initialState: ITodoState = {
  todos: [
    { id: 1, completed: false, title: 'Todo 1' },
    { id: 2, completed: true, title: 'Todo 2' },
    { id: 3, completed: false, title: 'Todo 3' },
  ],
  visibleTodos: VisibleTodosType.all,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((i) => i.id === action.payload.id)
      state.todos[index] = action.payload
    },
    changeVisibleTodos: (state, action) => {
      state.visibleTodos = action.payload
    },
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      })
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const selectTodos = (state: { todo: ITodoState }) => state.todo.todos
export const selectVisibleTodos = (state: { todo: ITodoState }) =>
  state.todo.visibleTodos

export const { updateTodo, changeVisibleTodos, addTodo, deleteTodo } =
  todoSlice.actions

export default todoSlice.reducer
