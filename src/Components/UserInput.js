import React from 'react';
import PropTypes from 'prop-types';

import FormControl, { FormControlInput } from './StyledFormComponent';

const UserInput = ({ errors, register }) => {
  return (
    <FormControl>
      <label htmlFor="username">
        Username
        <FormControlInput
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
          <small>Minimum length 3</small>
        )}
        {errors.username && errors.username.type === 'maxLength' && (
          <small>Maximum length 15</small>
        )}
      </label>
    </FormControl>
  );
};

export default UserInput;

UserInput.propTypes = {
  errors: PropTypes.shape({
    username: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
  register: PropTypes.func.isRequired,
};
