import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 250px;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 200px;
  margin-top: 4px;
  border: 2px solid #d5d8dc;
  outline: transparent;
  border-radius: 4px;
  :focus {
    border: 2px solid #33beff;
  }
  padding: 8px;
`;
