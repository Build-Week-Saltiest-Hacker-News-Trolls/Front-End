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

export const SignFormContainer = styled.div`
  margin: auto;
  min-width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-left: 60%;
    width: 40%;
  }
`;

export const SignForm = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div`
width; 100%;
`;

export const SignInput1 = styled.input`
  background: transparent;
  border: none;
  margin-top: 0.75rem;
`;

export const SignInput2 = styled.input`
  background: transparent;
  border: none;
`;

export const InputLine = styled.div`
  border-bottom: 1px solid orange;
  width: 100%;
  margin-bottom: 0.75rem;
`;

export const FeedCard = styled.div`
  border-radius: 10px;
  background: whitesmoke;
  box-shadow: 1px 1px 3px silver;
  width: 400px;
  height: 250px;
`;
