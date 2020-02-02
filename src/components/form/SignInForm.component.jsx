import React from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as EmailIcon } from '../../assets/iconmonstr-email-3.svg';
import { ReactComponent as LockIcon } from '../../assets/iconmonstr-lock-1.svg';

import FormInput from '../form-input/FormInput.component';

import FormError from './ErrorMsg.component';
import './SignInForm.styles.scss';

const SignInForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log(data);

  return (
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
          },
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
            message:
              'Password must have one lowercase, one uppercase letter and one number'
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

      <FormInput type="submit" className="form-input__btn" />
    </form>
  );
};

export default SignInForm;
