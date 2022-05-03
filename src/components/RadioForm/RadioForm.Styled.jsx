import styled from 'styled-components';

export const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  input {
    margin-left: 10px;
  }
`;
