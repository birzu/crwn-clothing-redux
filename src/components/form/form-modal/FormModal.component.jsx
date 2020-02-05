import React from 'react';
import ReactDOM from 'react-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import SignInForm from '../signin-form/SignInForm.component';
import RegisterForm from '../register-form/RegisterForm.component';
import AuthModalHeader from '../../AuthModalHeader/AuthModalHeader.component';

import { selectCurrentForm } from '../../../redux/selectors/auth.selectors';
import { toggleAuthModalHidden } from '../../../redux/reducers/auth.reducer';

import './FormModal.styles.scss';

/****************************
 * content for ModalWithHeader
 * content = { signin: SignInForm, register: Register }
 */
const mapDispatchToProps = dispatch => ({
  toggleAuthModalHidden: () => dispatch(toggleAuthModalHidden())
});

const mapStateToProps = createStructuredSelector({
  currentForm: selectCurrentForm
});

const ModalWithHeader = (ModalHeader, content) => ({
  toggleAuthModalHidden,
  currentForm
}) => {
  const Form = content[currentForm];
  return ReactDOM.createPortal(
    <div className="modal-wrapper" onClick={() => toggleAuthModalHidden()}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <ModalHeader />
        </div>
        {<Form />}
      </div>
    </div>,
    document.querySelector('#reactPortal')
  );
};

const FormModal = ModalWithHeader(AuthModalHeader, {
  signin: SignInForm,
  register: RegisterForm
});

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);
