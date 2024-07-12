import { RouterProvider } from 'react-router-dom'
import styles from './App.module.css'
import { router } from '../router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../actions/user'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [dispatch])

  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
