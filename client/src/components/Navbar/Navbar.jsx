import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
// import Logo from '../../assets/img/navbar-logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/slices/userSlice'

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {/* <img src={Logo} alt="" className={styles.navbarLogo} /> */}
        <div className={styles.navbarHeader}>MERN CLOUD</div>
        {!isAuth && (
          <div className={styles.navbarLogin}>
            <NavLink to="/login">Войти</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className={styles.navbarRegistration}>
            <NavLink to="/registration">Регистрация</NavLink>
          </div>
        )}
        {isAuth && (
          <div
            className={styles.navbarLogin}
            onClick={() => dispatch(logout())}
          >
            Выход
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
