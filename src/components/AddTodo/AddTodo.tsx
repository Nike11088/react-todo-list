import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todoSlice'
import Dialog from '../Dialog/Dialog'
import MyButton from '../ui/MyButton/MyButton'
import Modal from '../ui/Modal/Modal'
import styles from './AddTodo.module.css'

const AddTodo: FC = () => {
  const dispatch = useDispatch()
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const save = () => {
    if (title === '') {
      return
    }
    dispatch(addTodo(title))
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
