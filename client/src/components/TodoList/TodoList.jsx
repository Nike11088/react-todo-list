import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'
import { selectTodos, selectVisibleTodos } from '../../store/slices/todoSlice'
import { VisibleTodosType } from '../../types/enums'
import styles from './TodoList.module.css'
import { getTodos } from '../../actions/todo'

const TodoList = () => {
  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user) {
      dispatch(getTodos(user.id))
    }
  }, [dispatch, user])

  const todos = useSelector(selectTodos)
  const visibleTodos = useSelector(selectVisibleTodos)

  const [filteredTodos, setFilteredTodos] = useState(todos)

  useEffect(() => {
    if (visibleTodos === VisibleTodosType.active) {
      setFilteredTodos(todos.filter((todo) => !todo.completed))
    } else if (visibleTodos === VisibleTodosType.done) {
      setFilteredTodos(todos.filter((todo) => todo.completed))
    } else {
      setFilteredTodos(todos)
    }
  }, [visibleTodos, todos])

  return (
    <div className={styles.todoList}>
      {filteredTodos.length === 0
        ? 'Task list is empty'
        : filteredTodos.map((todo) => <TodoItem key={todo._id} todo={todo} />)}
    </div>
  )
}

export default TodoList
