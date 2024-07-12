import React, { FC, useState } from 'react'
import styles from './TodoItem.module.css'
import { updateTodo } from '../../actions/todo'
import { deleteTodo } from '../../actions/todo'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../types/types'
import Modal from '../ui/Modal/Modal'

// interface TodoItemPorps {
//   todo: ITodo
// }

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const [modalActive, setModalActive] = useState(false)

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
          onInput={(e) =>
            dispatch(updateTodo({ ...todo, title: e.target.value }))
          }
          // onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          //   dispatch(updateTodo({ ...todo, title: e.target.value }))
          // }
        />
        <button onClick={() => deleteTask()}>Delete</button>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        ok={() => dispatch(deleteTodo(todo._id))}
      >
        <div>The todo will be deleted. Continue?</div>
      </Modal>
    </>
  )
}

export default TodoItem
