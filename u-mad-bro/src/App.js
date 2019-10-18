import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SignIn from "./SignInLayout/SignIn";
import SignUp from "./SignInLayout/SignUp";
import PrivateRoute from "./components/PrivateRoute.js";
import Landing from "./Layout/Landing.js";
import Dashboard from "./Layout/Dashboard.js";
import { CommentContext } from "./Context/CommentContext.js";
import { FavCommentContext } from "./Context/FavCommentContext.js";

//Axios call goes here and data is added to "comments" state

function App() {
  const [comments] = useState("");
  const [favComments, setFavComments] = useState([]);

  const addToFavComments = comment => {
    setFavComments([...favComments, comment]);
  };

  const removeFromFavComments = commentId => {
    setFavComments(
      favComments.filter(comment => {
        return comment.id !== commentId;
      })
    );
  };

  return (
    <main>
      <CommentContext.Provider value={{ comments, addToFavComments }}>
        <FavCommentContext.Provider
          value={{ favComments, removeFromFavComments }}
        >
          <Landing />
//           <Route exact path="/" component={SignIn} />
//           <Route exact path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </FavCommentContext.Provider>
      </CommentContext.Provider>
    </main>
  );
}

export default App;
