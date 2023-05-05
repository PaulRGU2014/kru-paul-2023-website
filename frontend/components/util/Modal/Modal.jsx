import React from 'react';
import styles from './Modal.module.scss';
import reactDom from 'react-dom';

export default function Modal({ onClose, children, showClose = true }) {
  const [ modalRoot, setModalRoot ] = React.useState(null)
  React.useEffect(() => {
    setModalRoot(document.querySelector('body'));
  }, [])

  if (!modalRoot) return null
  return reactDom.createPortal(
    <div className={styles.modal}>
      {
        showClose && (
          <div className={styles.closeButton} onClick={() => {
            onClose()
          }}></div>
        )
      }
      <div className={styles.modalWrapper}>
        {children}
      </div>
    </div>, 
    modalRoot
  );
}