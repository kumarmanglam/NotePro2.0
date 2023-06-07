import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

const Modal = ({ isOpen = true, onClose, children }) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }
  return ReactDOM.createPortal(
    <div className="modal" style={{ backgroundColor: 'rgb(45 44 44 / 84%)' }}>
      <div className="mi-a sidebar-box-shadow br-10 p-10 pi-20 w-60 fixed bg-white top-50 right-50 z-99999 left-50 trans-x modal-transition">
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Render the modal in a separate DOM node
  );
};

export default Modal;
