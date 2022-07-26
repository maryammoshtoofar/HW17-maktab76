import styled from "styled-components";

export const DataTable = styled.table`
  width: 100%;
  background-color: #595959;
  text-align: right;
`;

export const PopupContent = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const PopupText = styled.p`
  border: 1px solid #595959;
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  margin: auto;
`;

export const ClosePopup = styled.button`
  border: none;
  background-color: transparent;
  color: #6f6f6f;
  padding-bottom: 10px;
  font-size: 18px;
  cursor: pointer;
`;
