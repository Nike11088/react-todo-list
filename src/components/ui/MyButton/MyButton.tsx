import React, { FC } from 'react'
import styles from './MyButton.module.css'

interface MyButtonProps {
  children?: React.ReactNode
  onClick: () => void
}

const MyButton: FC<MyButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <button className={styles.button} onClick={() => onClick()}>
        {children}
      </button>
    </>
  )
}

export default MyButton
