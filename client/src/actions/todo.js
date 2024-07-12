import axios from 'axios'
import {
  addTodo as addTodoItem,
  setTodos,
  deleteTodo as deleteTodoItem,
  updateTodo as updateTodoItem,
} from '../store/slices/todoSlice'
import { API_URL } from '../config'

export const addTodo = (title, user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}api/todo/`, {
        title,
        user,
      })
      dispatch(addTodoItem(response.data.todo))
      alert(response.data.message)
    } catch (e) {
      alert(e.response.data.message || e.message)
    }
  }
}

export const getTodos = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}api/todo?user=${user}`)
      dispatch(setTodos(response.data))
    } catch (e) {
      alert(e.response.data.message || e.message)
    }
  }
}

export const deleteTodo = (ids) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${API_URL}api/todo`, {
        data: { ids: ids },
      })
      dispatch(deleteTodoItem(ids))
      alert(response.data.message)
    } catch (e) {
      alert(e.response.data.message || e.message)
    }
  }
}

export const updateTodo = (todo) => {
  return async (dispatch) => {
    try {
      await axios.put(`${API_URL}api/todo`, todo)
      dispatch(updateTodoItem(todo))
    } catch (e) {
      alert(e.response.data.message || e.message)
    }
  }
}
