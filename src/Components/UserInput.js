import React from 'react';
import PropTypes from 'prop-types';

const UserInput = ({ errors, register }) => {
  return (
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
