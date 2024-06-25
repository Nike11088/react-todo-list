import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todoSlice'
import Dialog from '../Dialog/Dialog'

const AddTodo: FC = () => {
  const dispatch = useDispatch()
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const save = () => {
    if (title === '') {
      return
    }
    dispatch(addTodo(title))
    setTitle('')
    setDialogOpen(false)
  }

  const closeDialog = () => {
    setTitle('')
    setDialogOpen(false)
  }

  return (
    <>
      <button onClick={() => setDialogOpen(true)}>Add Task</button>
      <Dialog open={dialogOpen} ok={() => save()} cancel={() => closeDialog()}>
        <input
          type="text"
          value={title}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => input(e)}
        />
        {/* <button disabled={disabled} onClick={() => save()}>
          Add Task
        </button> */}
      </Dialog>
    </>
  )
}

export default AddTodo
