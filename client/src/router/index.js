import { createBrowserRouter } from 'react-router-dom'
import Registration from '../components/Authorization/Registration'
import Root from '../components/Root'
import Login from '../components/Authorization/Login'
import MainPage from '../pages/MainPage/MainPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'todo-list',
        element: <MainPage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'registration',
        element: <Registration />,
      },
    ],
  },
])
