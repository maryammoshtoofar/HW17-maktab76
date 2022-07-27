import styled from "styled-components";

export const DataTable = styled.table`
  width: 100%;
  background-color: #595959;
  text-align: right;
  color: #cfcfcf;
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

  &&:hover {
    color: #282c34;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  border-radius: 5px;
  padding: 5px 10px;
  color: #cfcfcf;
  background-color: transparent;
  border: ${(props) =>
    props.className === "del" ? "1px solid #EF4444" : "1px solid #19CAED"};
  cursor: pointer;
  &&:hover {
    background-color: ${(props) =>
      props.className === "del" ? "#EF4444" : "#19CAED"};
    outline: 2px solid #515050;
    color: ${(props) => (props.className === "del" ? "#cfcfcf" : "#000")};
    font-weight: bold;
  }
`;
