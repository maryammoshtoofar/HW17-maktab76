import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin: 10px 0;
`;

export const SmallRect = styled.div`
  width: 10px;
  height: 20px;
  background-color: #f6c90e;
  border-radius: 2px;
`;

export const Label = styled.label`
  color: #c4c4c4;
`;

export const InputElement = styled.input`
  background-color: transparent;
  border: 1px solid #868686;
  border-radius: 2px;
  color: #c4c4c4;
  font-size: 18px;
  padding: 5px 10px;
  text-align: right;
  &::placeholder {
    color: #868686;
  }
  &:focus {
    outline: 1px solid #f6c90e;
    background-color: #59564d;
  }
`;
