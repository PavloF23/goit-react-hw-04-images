import PropTypes from "prop-types";
import { useEffect } from "react";
import { Backdrop, ModalBox } from './Modal.styled';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose }) {
 
useEffect(() => {
   window.addEventListener("keydown", cleanEventListener);
  
  return () => {
    window.removeEventListener("keydown", cleanEventListener);
  }
}, [onClose]);  
  
   const cleanEventListener = evt => {
    if (evt.code === "Escape") {
      onClose();
    }
  };

 const handleBackdropClick = evt => {
   if (evt.currentTarget === evt.target) {
     onClose();
     } 
  };  
  
    return createPortal(
      <Backdrop onClick={handleBackdropClick}>
        <ModalBox>
          {children}
        </ModalBox>
      </Backdrop>,
      modalRoot
    );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
