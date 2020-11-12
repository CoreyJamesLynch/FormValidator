import React from 'react';
import PropTypes from 'prop-types';

import FormControl, {
  FormControlInput,
  FormControlSmall,
  FormControlLabel,
} from './StyledFormComponent';

const UserInput = ({ errors, register }) => {
  return (
    <FormControl>
      <FormControlLabel htmlFor="username">
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
          <FormControlSmall>Username is required</FormControlSmall>
        )}
        {errors.username && errors.username.type === 'pattern' && (
          <FormControlSmall>Only A-Z a-z characters are valid</FormControlSmall>
        )}
        {errors.username && errors.username.type === 'minLength' && (
          <FormControlSmall>Minimum length 3</FormControlSmall>
        )}
        {errors.username && errors.username.type === 'maxLength' && (
          <FormControlSmall>Maximum length 15</FormControlSmall>
        )}
      </FormControlLabel>
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
