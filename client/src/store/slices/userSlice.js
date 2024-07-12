import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
      state.isAuth = true
    },
    logout: (state, action) => {
      localStorage.removeItem('token')
      state.currentUser = null
      state.isAuth = false
    },
  },
})

// export const selectTodos = (state: { todo: ITodoState }) => state.todo.todos
// export const selectVisibleTodos = (state: { todo: ITodoState }) =>
//   state.todo.visibleTodos

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
