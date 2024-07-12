import React, { FC, useEffect, useRef } from 'react'
import styles from './Dialog.module.css'

interface DialogProps {
  open: boolean
  width?: string
  height?: string
  children: React.ReactNode
  ok: () => void
  cancel: () => void
}

const Dialog: FC<DialogProps> = ({
  open,
  children,
  width,
  height,
  ok,
  cancel,
}) => {
  const dialogRef = useRef<any>(null)

  useEffect(() => {
    if (dialogRef) {
      dialogRef.current?.showModal()
      dialogRef.current?.addEventListener('close', () => cancel())
    }
  }, [dialogRef, cancel])

  const okClick = () => {
    ok()
  }

  const closeClick = () => {
    dialogRef?.current?.close()
    cancel()
  }

  return (
    <>
      {open ? (
        <dialog
          ref={dialogRef}
          className={styles.dialog}
          style={{
            width: width ? width : '500px',
            height: height ? height : '300px',
          }}
        >
          <div>{children}</div>
          <div>
            <button onClick={() => okClick()}>OK</button>
            <button onClick={() => closeClick()}>Cancel</button>
          </div>
        </dialog>
      ) : (
        closeClick()
      )}
    </>
  )
}

export default Dialog
