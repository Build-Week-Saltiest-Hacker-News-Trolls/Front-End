import React, { useState } from "react";
import { Route } from "react-router-dom";
import SignIn from "./SignInLayout/SignIn";
import SignUp from "./SignInLayout/SignUp";
import SearchBar from "./components/SearchBar";
import PrivateRoute from "./components/PrivateRoute.js";
import Landing from "./Layout/Landing.js";
import Dashboard from "./Layout/Dashboard.js";
import { CommentContext } from "./Context/CommentContext.js";
import { FavCommentContext } from "./Context/FavCommentContext.js";
import { UserContext } from "./Context/UserContext.js";
import { fakeCommentData, fakeUserData } from "./fakeData.js";

//Axios call goes here and data is added to "comments" state

function App() {
  //====================user context====================
  const [user, setUser] = useState(fakeUserData);
  //user context

  //====================comments context====================
  const [comments, setComments] = useState(fakeCommentData);
  //====================comments context====================

  //====================fav comments context====================

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
  //====================fav comments context====================

  return (
    <main>
      <CommentContext.Provider value={{ comments, addToFavComments }}>
        <FavCommentContext.Provider
          value={{ favComments, removeFromFavComments }}
        >

          <UserContext.Provider value={user}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/search" component={SearchBar} />
            {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/dashboard" component={Dashboard} />
          </UserContext.Provider>

        </FavCommentContext.Provider>
      </CommentContext.Provider>
    </main>
  );
}

export default App;
