import React from 'react';
import PropTypes from 'prop-types';

const EmailInput = ({ errors, register }) => {
  return (
    <div className="form-control">
      <label htmlFor="email">
        Email
        <input
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
    </div>
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
