import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import './FormComponent.css';

const FormComponent = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form id="form" className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register With Us</h2>
        <div className="form-control">
          <label htmlFor="username">
            Username
            <input
              ref={register({ required: true, minLength: 3, maxLength: 15 })}
              type="text"
              id="username"
              placeholder="Enter username"
              name="username"
            />
            {errors.username && errors.username.type === 'required' && (
              <small>A username is required</small>
            )}
            {errors.username && errors.username.type === 'minLength' && (
              <small>Your username must have atleast least 3 characters</small>
            )}
            {errors.username && errors.username.type === 'maxLength' && (
              <small>Your username cannot be longer than 15 characters</small>
            )}
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="email">
            Email
            <input
              ref={register({ required: true })}
              type="email"
              id="email"
              placeholder="Enter email"
              name="email"
            />
            {errors.email && <small>A email is required</small>}
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="password">
            Password
            <input
              className="Error"
              ref={register({ required: true, minLength: 6, maxLength: 25 })}
              type="password"
              id="password"
              placeholder="Enter password"
              name="password"
            />
            {errors.password && errors.password.type === 'required' && (
              <small>A password is required</small>
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
              type="password"
              id="password2"
              placeholder="Confirm password"
              name="password2"
            />
            {errors.password2 && errors.password2.type === 'required' && (
              <small>A password is required</small>
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
