import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'

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
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
