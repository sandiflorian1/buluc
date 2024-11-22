import React from 'react';
import "../css/modal.css";

function Modal({ open, onClose, image }: any) {
  const backdropStyle = open ? "show" : "opacity-0";
  const modalStyle = open ? "rounded-lg" : "hidden";

  return (
    <div className={`backdrop ${backdropStyle}`} onClick={onClose}>
      <div className={`content ${modalStyle}`}>
        <img src={image} alt="image" className="mx-auto h-full mb:h-auto mb:my-auto" />
      </div>
    </div>
  );
}

export default Modal;