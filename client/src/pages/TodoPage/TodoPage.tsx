import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectTodos } from '../../store/slices/todoSlice'
import { useParams } from 'react-router-dom'

const TodoPage: FC = () => {
  const params = useParams()
  const todos = useSelector(selectTodos)
  const todo = todos.find((t) => t._id === Number(params.id))

  return (
    <div>
      <div>completed: {todo?.completed} </div>
      <div>title: {todo?.title} </div>
    </div>
  )
}

export default TodoPage
