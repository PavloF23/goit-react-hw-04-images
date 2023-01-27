import PropTypes from "prop-types";
import { useEffect } from "react";
import { Backdrop, ModalBox } from './Modal.styled';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, onClose, openMod }) {
 
useEffect(() => {
   window.addEventListener("keydown", cleanEventListener);
  
  return () => {
    window.removeEventListener("keydown", cleanEventListener);
  }
});  
  
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
  
   const onModalClick = evt => {
   if (evt.currentTarget !== evt.target) {
     openMod();
     } 
  };  
  
    return createPortal(
      <Backdrop onClick={handleBackdropClick}>
        <ModalBox onClick={onModalClick}>
          {children}
        </ModalBox>
      </Backdrop>,
      modalRoot
    );
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
   openMod: PropTypes.func.isRequired,
};
