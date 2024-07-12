import { createSlice } from '@reduxjs/toolkit'
import { ITodo } from '../../types/types'
import { VisibleTodosType } from '../../types/enums'

export interface ITodoState {
  todos: ITodo[]
  visibleTodos: VisibleTodosType
}

const initialState: ITodoState = {
  // todos: [
  //   { id: 1, completed: false, title: 'Todo 1' },
  //   { id: 2, completed: true, title: 'Todo 2' },
  //   { id: 3, completed: false, title: 'Todo 3' },
  // ],
  todos: [],
  visibleTodos: VisibleTodosType.all,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((i) => i._id === action.payload._id)
      state.todos[index] = action.payload
    },
    changeVisibleTodos: (state, action) => {
      state.visibleTodos = action.payload
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    setTodos: (state, action) => {
      state.todos = action.payload
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload)
    },
  },
})

export const selectTodos = (state: { todo: ITodoState }) => state.todo.todos
export const selectVisibleTodos = (state: { todo: ITodoState }) =>
  state.todo.visibleTodos

export const { updateTodo, changeVisibleTodos, addTodo, deleteTodo, setTodos } =
  todoSlice.actions

export default todoSlice.reducer
