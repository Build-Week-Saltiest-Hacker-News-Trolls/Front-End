import React, { useState, useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import Feed from "../components/Feed.js";
import NavBar from "./NavBar.js";
import Graph from "../components/Graph.js";
import FeedCardDetails from "../components/FeedCardDetails.js";
import { CommentContext } from "../Context/CommentContext.js";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import { UserContext } from "../Context/UserContext.js";
import SearchBar from "../components/SearchBar.js";
import Footer from "./Footer.js";
import { AxiosWithAuth } from "../utils/AxiosWithAuth.js";

const Dashboard = props => {
  const { user, setUser } = useContext(UserContext);
  const { comments, addToFavComments } = useContext(CommentContext);
  const { favComments, removeFromFavComments, setFavComments } = useContext(
    FavCommentContext
  );
  const [searchedComments, setSearchedComments] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");

  // console.log("comments from dashboard", comments);

  useEffect(() => {
    AxiosWithAuth()
      .get(`/users/${user.id}/comments`)
      .then(res => {
        setFavComments(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  const blankArray = [
    {
      positive: 0,
      negative: 0
    }
  ];
  const condition = () => {
    if (searchedComments.length === 0 && searchedTerm !== "") {
      return blankArray;
    } else if (searchedComments.length !== 0) {
      return searchedComments;
    } else {
      return comments;
    }
  };

  return (
    <>
      <NavBar props={props} />
      <Graph comments={condition()} />
      <SearchBar
        comments={comments}
        setSearchedComments={setSearchedComments}
        setSearchedTerm={setSearchedTerm}
      />
      <Footer />
    </>
  );
};

export default Dashboard;
