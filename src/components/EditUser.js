import React, { useState } from 'react';
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

import {
  EditHeader,
  UMBButton,
  SignInput1,
  SignInput2,
  InputContainer,
  SignForm,
  SignFormContainer
} from "../theme/Styled.js";

export default function EditUser() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // TODO: Add Save Button Functionality 
  const handleSave = e => {
    e.preventDefault();
    setCredentials({ username: "", password: "", email: ""});
  };

  const handleCancel = e => {
    e.preventDefault();
  };

  return (
    <SignFormContainer>
      <Logo />
      <EditHeader>Edit User Infomation</EditHeader>      
      <SignForm>
        <InputContainer>
          <SignInput1
            id="username"
            value={credentials.username}
            name="username"
            type="text"
            onChange={handleChange}
            placeholder="Edit Username"
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
        <InputContainer>
          <SignInput2
            id="email"
            value={credentials.email}
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email Address"
          />
        </InputContainer>
        <Link to="/dashboard">
          <UMBButton onClick={handleSave}>
            Save Changes
          </UMBButton>
        </Link>
        <Link to="/dashboard">
          <UMBButton onClick={handleCancel}>
            Cancel 
          </UMBButton>
        </Link>        
      </SignForm>
    </SignFormContainer>
  )
}