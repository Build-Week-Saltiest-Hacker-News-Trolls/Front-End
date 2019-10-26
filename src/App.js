import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { AxiosWithAuth } from "./utils/AxiosWithAuth.js";
import SignIn from "./SignInLayout/SignIn";
import SignUp from "./SignInLayout/SignUp";
import EditUser from "./components/EditUser.js";
import SearchBar from "./components/SearchBar";
import PrivateRoute from "./components/PrivateRoute.js";
import FeedCardDetails from "./components/FeedCardDetails";
import Landing from "./Layout/Landing.js";
import Dashboard from "./Layout/Dashboard.js";
import { CommentContext } from "./Context/CommentContext.js";
import { FavCommentContext } from "./Context/FavCommentContext.js";
import { UserContext } from "./Context/UserContext.js";
import { fakeCommentData, fakeUserData } from "./fakeData.js";

//Axios call goes here and data is added to "comments" state

function App() {
  //comments context
  // const [comments, setComments] = useState(fakeCommentData);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    AxiosWithAuth()
      .get("/comments")
      .then(res => {
        console.log("data from app.js", res.data.data);
        setComments(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  //user context
  const [user, setUser] = useState(fakeUserData);
  //user context
  console.log("user from app.js", user);

  //comments context

  //fav comments context
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
  //fav comments context

  return (
    <main>
      <CommentContext.Provider value={{ comments, addToFavComments }}>
        <FavCommentContext.Provider
          value={{ favComments, removeFromFavComments }}
        >
          <UserContext.Provider value={{ user, setUser }}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/edit" component={EditUser} />
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
