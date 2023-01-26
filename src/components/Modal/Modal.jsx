import PropTypes from "prop-types";
import { useEffect } from "react";
import { Backdrop, ModalBox } from './Modal.styled';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export function Modal({children, onClose}) {
 
useEffect(() => {
  
   const cleanEventListener = evt => {
    if (evt.code === "Escape") {
      onClose();
    }
  };
  
    window.addEventListener("keydown", cleanEventListener);
  return () => {
    window.removeEventListener("keydown", cleanEventListener);
  }
}, [onClose]);  

 const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
     onClose();
    } 
  };  
  
    return createPortal(
      <Backdrop onClick={cleanEventListener}>
        <ModalBox>
          {children}
        </ModalBox>
      </Backdrop>,
      modalRoot
    );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
