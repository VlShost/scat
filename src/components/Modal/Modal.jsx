import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import cross from '../../assets/images/cross.svg';

import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, toggleModal }) => {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  return createPortal(
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button type="button" className={css.btnCloseModal} onClick={toggleModal}>
          <img src={cross} alt="Close" />
        </button>
        <div className={css.modalContent}>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
