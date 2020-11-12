import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import './FormComponent.css';
import UserInput from './UserInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Password2Input from './Password2Input';

const FormWrapper = styled.body`
  background-color: rgb(58, 54, 54);
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
`;

const FormComponent = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data, event) => {
    event.target.reset();
  };

  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};

export default FormComponent;
