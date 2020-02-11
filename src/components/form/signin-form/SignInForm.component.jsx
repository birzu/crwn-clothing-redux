import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  userSigninGoogle,
  userSigninEmailAndPassword
} from '../../../redux/reducers/user.reducer';
import { createStructuredSelector } from 'reselect';
import { selectLoading } from '../../../redux/selectors/user.selectors';

import { ReactComponent as EmailIcon } from '../../../assets/iconmonstr-email-3.svg';
import { ReactComponent as LockIcon } from '../../../assets/iconmonstr-lock-1.svg';
import { ReactComponent as GoogleIcon } from '../../../assets/google-brands.svg';

import FormError from '../form-error/FormError.component';
import FormLoading from '../form-loading/FormLoading.component';
import FormInput from '../../form-input/FormInput.component';
import CustomButton from '../../custom-button/CustomButton.component';

import '../Form.styles.scss';

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(userSigninGoogle()),
  signInWithEmailAndPassword: credentials =>
    dispatch(userSigninEmailAndPassword(credentials))
});

const mapStateToProps = createStructuredSelector({
  loading: selectLoading
});

const SignInForm = ({
  signInWithGoogle,
  signInWithEmailAndPassword,
  loading
}) => {
  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmit = ({ email, password }) => {
    signInWithEmailAndPassword({ email, password });
    setValue('email', '');
    setValue('password', '');
  };

  return !loading ? (
    <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="email"
        type="email"
        inputRef={register({
          required: { value: true, message: 'Email is required for login' }
        })}
        label="Email"
        id="form-input-email"
        placeholder="user@example.com"
        inputCls="form-signin__input-email"
        labelCls="form-signin__label-email"
      >
        <EmailIcon className="form-signin__icon-email" />
      </FormInput>

      <FormError errors={errors} name="email" />

      <FormInput
        name="password"
        type="password"
        inputRef={register({
          required: { value: true, message: 'Password is required for login' },
          minLength: {
            value: 8,
            message: 'Password must have at least 8 character'
          }
        })}
        label="Password"
        id="form-input-password"
        placeholder="•••••••••••"
        inputCls="form-signin__input-password"
        labelCls="form-signin__label-password"
        icon={LockIcon}
      >
        <LockIcon className="form-signin__icon-lock" />
      </FormInput>
      <FormError errors={errors} name="password" />

      <CustomButton
        type="submit"
        cls="form-signin__action btn--signin"
        text="Log in"
      />
      <CustomButton
        type="button"
        cls="form-signin__action btn--google"
        text="Sign in with google"
        onClick={() => signInWithGoogle()}
      >
        <GoogleIcon className="btn__inner-icon" />
      </CustomButton>
    </form>
  ) : (
    <FormLoading signin />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
