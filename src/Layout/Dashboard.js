import React, { useContext } from "react";
import Feed from "../components/Feed.js";
import NavBar from "./NavBar.js";
import Graph from "../components/Graph.js";
import { CommentContext } from "../Context/CommentContext.js";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import SearchBar from "../components/SearchBar.js";

const Dashboard = props => {
  const { comments, addToFavComments } = useContext(CommentContext);

  return (
    <>
      <NavBar />
      <Graph comments={comments} />
      <SearchBar />
      <Feed />
    </>
  );
};

export default Dashboard;
