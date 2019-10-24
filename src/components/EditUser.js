import React, { useState, useContext } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

import {
  EditHeader,
  UMBButton,
  SignInput1,
  SignInput2,
  InputContainer,
  SignForm,
  SignFormContainer
} from "../theme/Styled.js";

export default function EditUser(props) {
  const { user, setUser } = useContext(UserContext);

  const [updatedUser, setUpdatedUser] = useState({
    username: user.username,
    password: user.password,
    email: user.email
  });

  const handleChange = e => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  // TODO: Add Save Button Functionality
  const handleSave = e => {
    e.preventDefault();
    setUser(updatedUser);
  };

  const handleCancel = e => {
    e.preventDefault();
  };

  return (
    <SignFormContainer>
      <Logo />
      <EditHeader>Edit Profile Details</EditHeader>
      <SignForm>
        <InputContainer>
          <SignInput1
            id="username"
            value={updatedUser.username}
            name="username"
            type="text"
            onChange={handleChange}
            placeholder="Edit Username"
          />
        </InputContainer>
        <InputContainer>
          <SignInput2
            id="password"
            value={updatedUser.password}
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
        </InputContainer>
        <InputContainer>
          <SignInput2
            id="email"
            value={updatedUser.email}
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email Address"
          />
        </InputContainer>
        <Link to="/dashboard">
          <UMBButton onClick={handleSave}>Save Changes</UMBButton>
        </Link>
        <Link to="/dashboard">
          <UMBButton>Cancel</UMBButton>
        </Link>
      </SignForm>
    </SignFormContainer>
  );
}
