import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from './Modal.module.css'

interface ModalProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  children?: React.ReactNode
  ok: () => void
  buttonsVisible?: boolean
}

const Modal: FC<ModalProps> = ({
  active,
  setActive,
  children,
  ok,
  buttonsVisible = true,
}) => {
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
        {buttonsVisible ? (
          <div className={styles.buttons}>
            <button onClick={() => okClick()}>OK</button>
            <button onClick={() => setActive(false)}>Cancel</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Modal
