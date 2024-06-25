import React, { FC, useState } from 'react'
import styles from './TodoItem.module.css'
import { updateTodo, deleteTodo } from '../../store/todoSlice'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../types/types'
import Dialog from '../Dialog/Dialog'

interface TodoItemPorps {
  todo: ITodo
}

const TodoItem: FC<TodoItemPorps> = ({ todo }) => {
  const dispatch = useDispatch()
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const deleteTask = () => {
    setDialogOpen(true)
  }
  const closeDialog = () => {
    setDialogOpen(false)
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
      <Dialog
        open={dialogOpen}
        ok={() => dispatch(deleteTodo(todo.id))}
        cancel={() => closeDialog()}
      >
        The todo will be deleted. Continue?
      </Dialog>
    </>
  )
}

export default TodoItem
