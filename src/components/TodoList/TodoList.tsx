import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem'
import { selectTodos, selectVisibleTodos } from '../../store/todoSlice'
import { VisibleTodosType } from '../../types/enums'

const TodoList = () => {
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
    <>
      {filteredTodos.length === 0
        ? 'Task list is empty'
        : filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </>
  )
}

export default TodoList
