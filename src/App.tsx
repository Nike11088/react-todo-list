import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import styles from './App.module.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  // {
  //   path: '/todo/:id',
  //   element: <TodoPage />,
  // },
])

const App = () => {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
