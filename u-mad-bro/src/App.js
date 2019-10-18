import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SignIn from "./SignInLayout/SignIn";
import SignUp from "./SignInLayout/SignUp";
import PrivateRoute from "./components/PrivateRoute.js";
import Landing from "./Layout/Landing.js";

//first commit

function App() {
  return (
    <main>
      <Landing />
      {/* <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} /> */}
    </main>
  );
}

export default App;
