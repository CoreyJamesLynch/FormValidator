import React from 'react';
import PropTypes from 'prop-types';

const Password2Input = ({ password, errors, register }) => {
  return (
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
            validate: (value) => value === password,
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
  );
};

export default Password2Input;

Password2Input.propTypes = {
  errors: PropTypes.shape({
    password2: PropTypes.shape({
      type: PropTypes.string,
    }),
  }).isRequired,
  register: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
};
