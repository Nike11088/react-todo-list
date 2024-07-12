import React, { useState } from 'react'
import styles from './Authorization.module.css'
import Input from '../../utils/input/Input'
import { registration } from '../../actions/user'
import { useDispatch } from 'react-redux'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  return (
    <div className={styles.authorization}>
      <div className={styles.authorizationHeader}>Регистрация</div>
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
        onClick={() => dispatch(registration(email, password))}
      >
        Зарегистрироваться
      </button>
    </div>
  )
}

export default Registration
