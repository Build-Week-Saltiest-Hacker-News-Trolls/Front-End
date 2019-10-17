import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SignUp from "./SignInLayout/SignUp";

//first commit

function App() {
  return (
    <div>
      <Route exact path="/" component={SignUp} />
    </div>
  );
}

export default App;
