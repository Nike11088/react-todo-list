import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from './Modal.module.css'

interface ModalProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  children?: React.ReactNode
  ok: () => void
}

const Modal: FC<ModalProps> = ({ active, setActive, children, ok }) => {
  const okClick = () => {
    setActive(false)
    ok()
  }

  return (
    <div className={active ? styles.modal + ' ' + styles.active : styles.modal}>
      <div
        className={
          active
            ? styles.modalContent + ' ' + styles.active
            : styles.modalContent
        }
      >
        <div>{children}</div>
        <div className={styles.buttons}>
          <button onClick={() => okClick()}>OK</button>
          <button onClick={() => setActive(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
