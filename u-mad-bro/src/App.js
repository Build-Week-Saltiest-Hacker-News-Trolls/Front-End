import React from "react";
import { Route } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import SignUp from './SignInLayout/SignUp';

//first commit

function App() {
  return (
    <main>
      <Route exact path="/" component={SignUp} />
    </main>
  );
}

export default App;
