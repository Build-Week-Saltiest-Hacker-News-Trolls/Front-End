import "./index.scss";
import styled from "styled-components";

export const UMBButton = styled.button`
  border-radius: 5px;
  background: linear-gradient(to right, #fe8c00, #f83600);
  color: white;
  padding: 6px 15px;
  box-shadow: 1px 1px 1px whitesmoke;
  transition: 400ms;

  &:hover {
    filter: hue-rotate(-30deg) brightness(110%);
    box-shadow: 3px 3px 10px lightgray;
  }
`;
