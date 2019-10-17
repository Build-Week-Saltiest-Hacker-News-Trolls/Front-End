import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SignIn from './SignInLayout/SignIn';
import SignUp from './SignInLayout/SignUp';
import PrivateRoute from "./components/PrivateRoute.js";


//first commit

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
=======
    <main>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </main>
>>>>>>> 454aabd8deb8c0f0569414395be488f537b4a8a4
  );
}

export default App;
