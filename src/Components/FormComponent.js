import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import './FormComponent.css';
import UserInput from './UserInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const FormComponent = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  console.log(password);
  const onSubmit = (data, event) => {
    event.target.reset();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register With Us</h2>

        <UserInput errors={errors} register={register} />
        <EmailInput errors={errors} register={register} />
        <PasswordInput errors={errors} register={register} />

        <div className="form-control">
          <label htmlFor="password2">
            Confirm Password
            <input
              type="password"
              placeholder="Confirm password"
              name="password2"
              style={{
                border: errors.password2 ? '1px solid red' : '',
              }}
              ref={register({
                required: true,
                validate: (value) => value === password.current,
              })}
            />
            {errors.password2 && errors.password2.type === 'required' && (
              <small>Password is required</small>
            )}
            {errors.password2 && errors.password2.type === 'validate' && (
              <small>Passwords must match</small>
            )}
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
