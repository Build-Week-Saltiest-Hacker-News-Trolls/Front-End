import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  // <br/> tags are temporary until styling is added
  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          value={credentials.username}
          name="username"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          value={credentials.password}
          name="password"
          type="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Sign In</button>
        <br />
        {/* <Link to={`/signup`}>Sign Up</Link> */}
      </form>
    </>
  );
}
