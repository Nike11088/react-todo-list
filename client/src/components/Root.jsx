import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './Root.module.css'
import { useSelector } from 'react-redux'
import Navbar from './Navbar/Navbar'

const Root = () => {
  const isAuth = useSelector((state) => state.user.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    isAuth ? navigate('/todo-list') : navigate('/login')
  }, [isAuth, navigate])

  return (
    <div>
      <Navbar />
      <div className={styles.rootContent}>
        <Outlet />
      </div>
    </div>
  )
}

export default Root
