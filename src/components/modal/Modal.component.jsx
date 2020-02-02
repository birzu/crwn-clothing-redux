import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Form from '../form/SignInForm.component';
import AuthModalHeader from '../AuthModalHeader/AuthModalHeader.component';

import { toggleAuthModalHidden } from '../../redux/reducers/auth.reducer';

import './Modal.styles.scss';

// const Modal = props => {
//   return ReactDOM.createPortal(
//     <div className="modal-wrapper">
//       <div className="modal">{props.children}</div>
//     </div>,
//     document.querySelector('#reactPortal')
//   );
// };
const mapDispatchToProps = dispatch => ({
  toggleAuthModalHidden: () => dispatch(toggleAuthModalHidden())
});

const ModalWithHeader = (Content, ModalHeader) => ({
  toggleAuthModalHidden
}) => {
  return ReactDOM.createPortal(
    <div className="modal-wrapper" onClick={() => toggleAuthModalHidden()}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <ModalHeader />
        </div>
        <Content />
      </div>
    </div>,
    document.querySelector('#reactPortal')
  );
};
const Modal = ModalWithHeader(Form, AuthModalHeader);

export default connect(null, mapDispatchToProps)(Modal);
