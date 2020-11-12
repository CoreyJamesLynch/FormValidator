import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

import UserInput from './UserInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Password2Input from './Password2Input';
import {
  FormContainer,
  Form,
  FormButton,
  FormWrapper,
  FormH2,
} from './StyledFormComponent';

const FormComponent = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data, event) => {
    event.target.reset();
  };

  return (
    <FormWrapper>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormH2>Register With Us</FormH2>

          <UserInput errors={errors} register={register} />
          <EmailInput errors={errors} register={register} />
          <PasswordInput errors={errors} register={register} />
          <Password2Input
            errors={errors}
            register={register}
            password={password.current}
          />

          <FormButton type="submit">Submit</FormButton>
        </Form>
      </FormContainer>
    </FormWrapper>
  );
};

export default FormComponent;
