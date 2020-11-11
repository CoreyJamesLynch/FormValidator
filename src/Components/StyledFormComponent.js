import styled from 'styled-components';

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
export { FormControlInput, FormControlSmall };
