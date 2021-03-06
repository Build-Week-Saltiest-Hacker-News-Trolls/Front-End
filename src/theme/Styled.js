import "./index.scss";
import styled from "styled-components";

export const UMBButton = styled.button`
  border-radius: 5px;
  background: linear-gradient(to right, #fe8c00, #f83600);
  color: white;
  padding: 6px 15px;
  box-shadow: 1px 1px 1px whitesmoke;
  transition: 400ms;
  justify-content: center;

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

export const EditHeader = styled.h4`
  color: rgba(255, 114, 0, 1);
  margin-top: 2.5rem;
`;

export const FeedCard = styled.div`
  border-radius: 10px;
  border: 1.5px solid silver;
  background: whitesmoke;
  box-shadow: 1px 1px 3px silver;
  width: 90%;
  height: 250px;
  padding: 10px;
  margin: 10px auto;
`;

export const SearchForm = styled.form`
  // border-bottom: none;
  // border: 1px solid silver;
  // border-radius: 10px;
  width: 90%;
  // height: 50px;
  margin: 15px auto;
  margin-bottom: 120px;
  // padding-bottom: 18px;
  color: black;
`;

export const FootSpan = styled.span`
  font-size: 2.5rem;
  margin-left: 20px;
  color: white;
`;

export const Outer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(2, 24, 43, 1);
  color: white;
`;

export const Inner = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  a {
    margin: 20px;
    color: white;
    font-size: 1.5rem;
  }
`;

export const Copy = styled.div`
  color: white;
  text-align: center;
  background-color: rgba(2, 24, 43, 1);

  p {
    background-color: rgba(2, 24, 43, 1);
    font-size: 1.3rem;
    margin: 0;
    padding: 2rem 0;
  }
`;

export const FeedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 25%;
`;

export const CardUsername = styled.div`
  &:hover {
    cursor: pointer;

    strong {
      color: rgba(255, 114, 0, 1);
    }
  }
`;
