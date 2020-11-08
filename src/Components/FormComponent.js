import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import './FormComponent.css';

const FormComponent = () => {
  const { register, handleSubmit, errors, formState, watch } = useForm({
    mode: 'onBlur',
  });

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data, event) => {
    event.target.reset();
    console.log(formState);
  };

  return (
    <div className="container">
      <form id="form" className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register With Us</h2>

        <div className="form-control">
          <label htmlFor="username">
            Username
            <input
              ref={register({
                required: true,
                minLength: 3,
                maxLength: 15,
                pattern: /^[A-Za-z]+$/i,
              })}
              style={{
                border: errors.username ? '1px solid red' : '',
              }}
              type="text"
              id="username"
              placeholder="Enter username"
              name="username"
              disabled={formState.isSubmitting}
            />
            {errors.username && errors.username.type === 'required' && (
              <small>Username is required</small>
            )}
            {errors.username && errors.username.type === 'pattern' && (
              <small>Only A-Z a-z characters are valid</small>
            )}
            {errors.username && errors.username.type === 'minLength' && (
              <small>Username must have atleast least 3 characters</small>
            )}
            {errors.username && errors.username.type === 'maxLength' && (
              <small>Username cannot be longer than 15 characters</small>
            )}
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="email">
            Email
            <input
              ref={register({
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              style={{
                border: errors.email ? '1px solid red' : '',
              }}
              type="text"
              id="email"
              placeholder="Enter email"
              name="email"
              disabled={formState.isSubmitting}
            />
            {errors.email && errors.email.type === 'required' && (
              <small>Email is required</small>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <small>Email must be valid i.e. example@example.com </small>
            )}
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="password">
            Password
            <input
              className="Error"
              ref={register({
                required: true,
                minLength: 6,
                maxLength: 25,
                pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
              })}
              style={{
                border: errors.password ? '1px solid red' : '',
              }}
              type="password"
              id="password"
              placeholder="Enter password"
              name="password"
              disabled={formState.isSubmitting}
            />
            {errors.password && errors.password.type === 'required' && (
              <small>Password is required</small>
            )}
            {errors.password && errors.password.type === 'pattern' && (
              <small>
                Password must contain: Lowercase, Uppercase, Number, Symbol.
              </small>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <small>Minimum length 6</small>
            )}
            {errors.password && errors.password.type === 'maxLength' && (
              <small>Max length 25</small>
            )}
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="password2">
            Confirm Password
            <input
              ref={register({
                required: true,
                validate: (value) => value === password.current,
              })}
              style={{
                border: errors.password2 ? '1px solid red' : '',
              }}
              type="password"
              id="password2"
              placeholder="Confirm password"
              name="password2"
              disabled={formState.isSubmitting}
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
        {formState.isSubmitted && (
          <div className="success">Form successfully sent. Thank You!</div>
        )}
      </form>
    </div>
  );
};

export default FormComponent;
