import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import './FormComponent.css';

const FormComponent = () => {
  const { register, handleSubmit, errors, watch } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data, event) => {
    event.target.reset();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register With Us</h2>

        <div className="form-control">
          <label htmlFor="username">
            Username
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              style={{
                border: errors.username ? '1px solid red' : '',
              }}
              ref={register({
                required: true,
                minLength: 3,
                maxLength: 15,
                pattern: /^[A-Za-z]+$/i,
              })}
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
              type="text"
              placeholder="Enter email"
              name="email"
              style={{
                border: errors.email ? '1px solid red' : '',
              }}
              ref={register({
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
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
              type="password"
              placeholder="Enter password"
              name="password"
              style={{
                border: errors.password ? '1px solid red' : '',
              }}
              ref={register({
                required: true,
                minLength: 6,
                maxLength: 25,
                pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
              })}
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
