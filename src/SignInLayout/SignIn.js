import React, { useState } from "react";
import { SignForm } from '../theme/Styled';
import Logo from '../components/Logo';

export default function SignIn() {
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
    <SignForm>
      <Logo />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          value={credentials.username}
          name="username"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          value={credentials.password}
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </SignForm>
  );
}
