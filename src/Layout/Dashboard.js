import React, { useState, useContext } from "react";
import Feed from "../components/Feed.js";
import NavBar from "./NavBar.js";
import Graph from "../components/Graph.js";
import { CommentContext } from "../Context/CommentContext.js";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import SearchBar from "../components/SearchBar.js";
import Footer from "./Footer.js";

const Dashboard = props => {
  const { comments, addComments } = useContext(CommentContext);
  const [searchedComments, setSearchedComments] = useState([]);
  const [searchedTerm, setSearchedTerm] = useState("");
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
      <NavBar />
      <Graph comments={condition()} />
      <SearchBar
        comments={comments}
        setSearchedComments={setSearchedComments}
        setSearchedTerm={setSearchedTerm}
      />
      {/* <Feed /> */}
      <Footer />
    </>
  );
};

export default Dashboard;
