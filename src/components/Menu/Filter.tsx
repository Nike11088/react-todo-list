import React, { FC } from 'react'
import { VisibleTodosType } from '../../types/enums'
import { changeVisibleTodos } from '../../store/todoSlice'
import { useDispatch } from 'react-redux'

const Menu: FC = () => {
  const dispatch = useDispatch()

  const filter = (type: VisibleTodosType) => {
    dispatch(changeVisibleTodos(type))
  }

  return (
    <div>
      <button onClick={() => filter(VisibleTodosType.all)}>All</button>
      <button onClick={() => filter(VisibleTodosType.active)}>Active</button>
      <button onClick={() => filter(VisibleTodosType.done)}>Done</button>
    </div>
  )
}

export default Menu
