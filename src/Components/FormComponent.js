import React from 'react';
import { useForm } from 'react-hook-form';

import './FormComponent.css';

const FormComponent = () => {
  const { register, handleSubmit, errors } = useForm();
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
              <small>This is required</small>
            )}
            {errors.username && errors.username.type === 'minLength' && (
              <small>Minimum length 3</small>
            )}
            {errors.username && errors.username.type === 'maxLength' && (
              <small>Max length 15</small>
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
            {errors.email && <small>This is required</small>}
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="password">
            Password
            <input
              ref={register({ required: true, minLength: 6, maxLength: 25 })}
              type="password"
              id="password"
              placeholder="Enter password"
              name="password"
            />
            {errors.password && errors.password.type === 'required' && (
              <small>This is required</small>
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
              ref={register({ required: true })}
              type="password"
              id="password2"
              placeholder="Confirm password"
              name="password2"
            />
            {errors.password2 && <small>This is required</small>}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
