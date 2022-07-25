import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top: 50px solid #ffe664;
  background-color: #515050;
  box-sizing: border-box;
  padding: 10px 20px;
  gap: 40px;
`;

export const StyledSmallContainer = styled.div`
  background-color: #515050;
  display: grid;
  grid-template-columns: auto auto;
  
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
