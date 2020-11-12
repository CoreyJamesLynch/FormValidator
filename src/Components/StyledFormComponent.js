import styled from 'styled-components';

const FormWrapper = styled.body`
  background-color: rgb(58, 54, 54);
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
`;

const FormContainer = styled.div`
  background-color: rgb(15, 41, 80);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  width: 500px;
`;

const Form = styled.form`
  padding: 30px 40px;
`;

const FormButton = styled.button`
  cursor: pointer;
  background-color: #313a41;
  border: 2px solid #13471c;
  border-radius: 4px;
  color: rgb(221, 187, 34);
  display: block;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
`;

const FormControl = styled.div`
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
`;

const FormControlInput = styled.input`
  border: 2px solid rgb(236, 207, 152);
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  font-size: 14px;
`;

const FormControlSmall = styled.small`
  color: red;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default FormControl;
export {
  FormControlInput,
  FormControlSmall,
  FormContainer,
  Form,
  FormButton,
  FormWrapper,
};
