import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.styles.scss';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <div className="modal">{props.children}</div>
    </div>,
    document.querySelector('#reactPortal')
  );
};

export default Modal;
