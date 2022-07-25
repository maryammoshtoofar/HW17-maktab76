import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  border-top: 50px solid #ffe664;
  background-color: #515050;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px 20px;
  gap: 40px;
`;

export const StyledSmallForm = styled(StyledForm)`
  border: none;
  border-radius: none;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: 10px;
  margin-left: 20px;
`;
