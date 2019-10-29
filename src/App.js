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
import Axios from "axios";

//Axios call goes here and data is added to "comments" state

function App() {
  //comments context

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AxiosWithAuth()
      .get("/comments")
      .then(res => {
        // console.log("data from app.js", res.data.data);
        setComments(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  //user context
  const [user, setUser] = useState(fakeUserData);
  //user context
  console.log("User from App.js", user);
  //comments context

  //fav comments context

  const [favComments, setFavComments] = useState([]);

  const getFavComments = () => {
    AxiosWithAuth()
      .get(`/users/${user.id}/comments/`)
      .then(res => {
        console.log("Get Fav Comments ", res);
        setFavComments(res.data.data);
      })
      .catch(err => console.log(err));
  };

  const addToFavComments = comment => {
    AxiosWithAuth()
      .post(`/users/${user.id}/comments/${comment.id}`)
      .then(res => getFavComments())
      .catch(err => console.log(err));
  };

  const removeFromFavComments = id => {
    AxiosWithAuth()
      .delete(`/users/${user.id}/comments/${id}`)
      .then(res => {
        // console.log("removeFromFavComments ", res);
        getFavComments();
      })
      .catch(err => console.log(err));
    // setFavComments(favComments.filter(comment => commentId !== comment.id));
  };

  useEffect(() => {}, [favComments]);
  //fav comments context

  return (
    <main>
      <CommentContext.Provider value={{ comments, addToFavComments }}>
        <FavCommentContext.Provider
          value={{ favComments, removeFromFavComments, setFavComments }}
        >
          <UserContext.Provider value={{ user, setUser }}>
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/edit" component={EditUser} />
            <PrivateRoute exact path="/search" component={SearchBar} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </UserContext.Provider>
        </FavCommentContext.Provider>
      </CommentContext.Provider>
    </main>
  );
}

export default App;
