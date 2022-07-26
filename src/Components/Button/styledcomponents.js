import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#F6C90E" : "#515050")};
  color: ${(props) => (props.primary ? "#797049" : "#C5C5C5")};
  padding: 10px 20px;
  border: ${(props) => (props.primary ? "none" : "1px solid #868686")};
  font-size: 18px;
  border-radius: 5px;
`;
