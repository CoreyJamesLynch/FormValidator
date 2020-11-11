import React from 'react';
import PropTypes from 'prop-types';

import FormControl, {
  FormControlInput,
  FormControlSmall,
} from './StyledFormComponent';

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
          <FormControlSmall>Password is required</FormControlSmall>
        )}
        {errors.password && errors.password.type === 'pattern' && (
          <FormControlSmall>
            Password must contain: Lowercase, Uppercase, Number, Symbol.
          </FormControlSmall>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <FormControlSmall>Minimum length 6</FormControlSmall>
        )}
        {errors.password && errors.password.type === 'maxLength' && (
          <FormControlSmall>Max length 25</FormControlSmall>
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
