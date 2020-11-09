import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import './FormComponent.css';
import UserInput from './UserInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Password2Input from './Password2Input';

const FormComponent = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data, event) => {
    event.target.reset();
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register With Us</h2>

        <UserInput errors={errors} register={register} />
        <EmailInput errors={errors} register={register} />
        <PasswordInput errors={errors} register={register} />
        <Password2Input
          errors={errors}
          register={register}
          password={password.current}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
