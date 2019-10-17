import React from "react";
import { Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import SignIn from './SignInLayout/SignIn';
import SignUp from './SignInLayout/SignUp';

//first commit

function App() {
  return (
    <main>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </main>
  );
}

export default App;
