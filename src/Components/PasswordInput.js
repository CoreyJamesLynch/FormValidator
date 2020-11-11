import React from 'react';
import PropTypes from 'prop-types';

import FormControl, { FormControlInput } from './StyledFormComponent';

const PasswordInput = ({ errors, register }) => {
  return (
    <FormControl>
      <label htmlFor="password">
        Password
        <FormControlInput
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
            pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,25}$/,
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
    </FormControl>
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
