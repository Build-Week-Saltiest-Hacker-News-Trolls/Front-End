import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { AxiosWithAuth } from "../utils/AxiosWithAuth.js";
import {
  UMBButton,
  SignInput1,
  SignInput2,
  InputContainer,
  SignForm,
  SignFormContainer
} from "../theme/Styled.js";

export default function SignUp(props) {
  const [credentials, setCredentials] = useState({
    display_name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/users", credentials)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    props.closeDrawer();

    setCredentials({ display_name: "", email: "", password: "" });
  };

  return (
    <SignFormContainer>
      <Logo />
      <SignForm onSubmit={handleSubmit}>
        <InputContainer>
          <SignInput1
            id="display_name"
            value={credentials.display_name}
            name="display_name"
            type="text"
            onChange={handleChange}
            placeholder="Username"
          />
        </InputContainer>
        <InputContainer>
          <SignInput1
            id="email"
            value={credentials.email}
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email"
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
        <Link to="/dashboard">
          <UMBButton onClick={handleSubmit}>Sign Up</UMBButton>
        </Link>
      </SignForm>
    </SignFormContainer>
  );
}
