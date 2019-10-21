import React, { useState } from "react";
import Logo from "../components/Logo";
import {
  UMBButton,
  SignInput1,
  SignInput2,
  InputLine,
  InputContainer,
  SignForm,
  SignFormContainer
} from "../theme/Styled.js";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setCredentials({ username: "", password: "" });
  };

  return (
    <SignFormContainer>
      <Logo />
      <SignForm>
        <InputContainer>
          <SignInput1
            id="username"
            value={credentials.username}
            name="username"
            type="text"
            onChange={handleChange}
            placeholder="Username"
          />
        </InputContainer>
        <InputContainer>
          <SignInput2
            id="password"
            value={credentials.password}
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </InputContainer>
        <UMBButton onClick={handleSubmit}>Sign Up</UMBButton>
      </SignForm>
    </SignFormContainer>
  );
}
