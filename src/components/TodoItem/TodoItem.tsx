import React, { FC, useState } from 'react'
import styles from './TodoItem.module.css'
import { updateTodo, deleteTodo } from '../../store/todoSlice'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../types/types'
import Modal from '../ui/Modal/Modal'

interface TodoItemPorps {
  todo: ITodo
}

const TodoItem: FC<TodoItemPorps> = ({ todo }) => {
  const dispatch = useDispatch()
  const [modalActive, setModalActive] = useState<boolean>(false)

  const deleteTask = () => {
    setModalActive(true)
  }

  return (
    <>
      <div className={styles.todoRow}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            dispatch(updateTodo({ ...todo, completed: !todo.completed }))
          }
        />
        <input
          type="text"
          value={todo.title}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(updateTodo({ ...todo, title: e.target.value }))
          }
        />
        <button onClick={() => deleteTask()}>Delete</button>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        ok={() => dispatch(deleteTodo(todo.id))}
      >
        <div>The todo will be deleted. Continue?</div>
      </Modal>
    </>
  )
}

export default TodoItem
