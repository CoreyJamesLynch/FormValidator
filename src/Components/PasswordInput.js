import React from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({ errors, register }) => {
  return (
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
  );
};

export default PasswordInput;

PasswordInput.propTypes = {
  errors: PropTypes.shape({
    password: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
  register: PropTypes.func.isRequired,
};
