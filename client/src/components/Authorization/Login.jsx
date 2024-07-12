import React, { useState } from 'react'
import styles from './Authorization.module.css'
import Input from '../../utils/input/Input'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/user'
import { Modal } from '@mui/material'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={styles.authorization}>
      <div className={styles.authorizationHeader}>Авторизация</div>
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button
        className={styles.authorizationBtn}
        onClick={() => dispatch(login(email, password))}
      >
        Войти
      </button>
    </div>
  )
}

export default Login
