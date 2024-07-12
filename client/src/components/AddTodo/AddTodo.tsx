import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/slices/todoSlice'
import { addTodo as addTodoAction } from '../../actions/todo'
import MyButton from '../ui/MyButton/MyButton'
import Modal from '../ui/Modal/Modal'
import styles from './AddTodo.module.css'

const AddTodo: FC = () => {
  const dispatch = useDispatch<any>()
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const user = useSelector((state: any) => state.user.currentUser)

  const save = () => {
    if (title === '') {
      return
    }
    dispatch(addTodoAction(title, user.id))
    setTitle('')
  }

  return (
    <>
      <MyButton onClick={() => setModalActive(true)}>Add Task</MyButton>
      <Modal active={modalActive} setActive={setModalActive} ok={save}>
        <input
          className={styles.title}
          type="text"
          value={title}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </Modal>
    </>
  )
}

export default AddTodo
