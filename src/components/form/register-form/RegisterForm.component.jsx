import React from 'react';
import { useForm } from 'react-hook-form';

import { ReactComponent as EmailIcon } from '../../../assets/iconmonstr-email-3.svg';
import { ReactComponent as LockIcon } from '../../../assets/iconmonstr-lock-1.svg';
import { ReactComponent as UserIcon } from '../../../assets/iconmonstr-user-1.svg';
import { ReactComponent as GoogleIcon } from '../../../assets/google-brands.svg';

import FormError from '../form-error/FormError.component';

import FormInput from '../../form-input/FormInput.component';
import CustomButton from '../../custom-button/CustomButton.component';

import '../Form.styles.scss';

const RegisterForm = () => {
  const { register, handleSubmit, errors, watch, setValue } = useForm();

  const onSubmit = data => {
    setValue('username', '');
    setValue('email', '');
    setValue('password', '');
    setValue('password-confirm', '');
    console.log(data);
  };

  return (
    <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        id="form-input-username"
        type="text"
        name="username"
        label="Username"
        inputCls="form-register__input-username"
        labelCls="form-register__label-username"
        placeholder="username"
        inputRef={register({
          required: {
            value: true,
            message: 'Username is required to register'
          },
          minLength: {
            value: 4,
            message: 'Username can not be shorter than 4 characters'
          },
          maxLength: {
            value: 15,
            message: 'Username can not be longer than 15 characters'
          },
          pattern: {
            value: /^[A-Za-z0-9_]{1,15}$/,
            message:
              'Username can contain uppercase letters, lowercase letters, numbers and _ '
          }
        })}
      >
        <UserIcon className="form-register__icon-user" />{' '}
      </FormInput>

      <FormError errors={errors} name="username" />

      <FormInput
        id="form-input-email"
        type="email"
        name="email"
        label="Email"
        inputCls="form-register__input-email"
        labelCls="form-register__label-email"
        placeholder="user@example.com"
        inputRef={register({
          required: { value: true, message: 'Email is required to register' }
        })}
      >
        <EmailIcon className="form-register__icon-email" />{' '}
      </FormInput>

      <FormError errors={errors} name="email" />

      <FormInput
        id="form-input-password"
        type="password"
        name="password"
        label="Password"
        inputCls="form-register__input-password"
        labelCls="form-register__label-password"
        placeholder="•••••••••••"
        inputRef={register({
          required: {
            value: true,
            message: 'Password is required to register'
          },
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
            message:
              'Password must have one lowercase, one uppercase letter and one number'
          }
        })}
      >
        <LockIcon className="form-register__icon-lock" />{' '}
      </FormInput>
      <FormError errors={errors} name="password" />
      <FormInput
        id="form-input-password-confirm"
        type="password"
        name="password-confirm"
        label="Confirm Password"
        inputCls="form-register__input-password-confirm"
        labelCls="form-register__label-password-confirm"
        placeholder="•••••••••••"
        inputRef={register({
          required: {
            value: true,
            message: 'Password is required to register'
          },
          validate: val => val === watch('password') || 'Password do not match'
        })}
      >
        <LockIcon className="form-register__icon-lock" />{' '}
      </FormInput>
      <FormError errors={errors} name="password-confirm" />
      <CustomButton
        type="submit"
        text="Register"
        cls="form-register__action btn--register"
      />
      <CustomButton
        type="submit"
        text="Sign in with google"
        cls="form-register__action btn--google"
      >
        <GoogleIcon className="btn__inner-icon" />
      </CustomButton>
    </form>
  );
};

export default RegisterForm;
