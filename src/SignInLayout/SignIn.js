import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { AxiosWithAuth } from "../utils/AxiosWithAuth.js";
import { UserContext } from "../Context/UserContext.js";

import {
  UMBButton,
  SignInput1,
  SignInput2,
  InputContainer,
  SignForm,
  SignFormContainer
} from "../theme/Styled.js";

export default function SignIn(props) {
  // console.log("props from SignIn", props.props);

  const { setUser } = useContext(UserContext);

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [loginFailure, setLoginFailure] = useState(false);

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        console.log("Results from Signin", res);
        setUser(res.data);
        localStorage.setItem("token", "fakeTokenlkjsldfmnwaoij");
        props.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
        setLoginFailure(true);
      });

    setCredentials({ username: "", password: "" });
  };

  return (
    <SignFormContainer>
      <Logo />
      <SignForm onSubmit={handleSubmit}>
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
        {loginFailure && (
          <strong>
            <p style={{ color: "red" }}>
              Please enter the correct login information
            </p>
          </strong>
        )}

        <UMBButton onClick={handleSubmit}>Sign In</UMBButton>
      </SignForm>
    </SignFormContainer>
  );
}
