import React, { FC } from 'react'
import { VisibleTodosType } from '../../types/enums'
import { changeVisibleTodos } from '../../store/slices/todoSlice'
import { useDispatch } from 'react-redux'
import MyButton from '../ui/MyButton/MyButton'

const Filter: FC = () => {
  const dispatch = useDispatch()

  const filter = (type: VisibleTodosType) => {
    dispatch(changeVisibleTodos(type))
  }

  return (
    <div>
      <MyButton onClick={() => filter(VisibleTodosType.all)}>All</MyButton>
      <MyButton onClick={() => filter(VisibleTodosType.active)}>
        Active
      </MyButton>
      <MyButton onClick={() => filter(VisibleTodosType.done)}>Done</MyButton>
    </div>
  )
}

export default Filter
