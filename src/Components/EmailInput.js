import React from 'react';
import PropTypes from 'prop-types';

import FormControl, { FormControlInput } from './StyledFormComponent';

const EmailInput = ({ errors, register }) => {
  return (
    <FormControl>
      <label htmlFor="email">
        Email
        <FormControlInput
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
    </FormControl>
  );
};

export default EmailInput;

EmailInput.propTypes = {
  errors: PropTypes.shape({
    email: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
  register: PropTypes.func.isRequired,
};
