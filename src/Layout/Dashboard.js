import React, { useContext } from "react";
import { Route } from "react-router-dom";
import Feed from "../components/Feed.js";
import NavBar from "./NavBar.js";
import Graph from "../components/Graph.js";
import FeedCardDetails from "../components/FeedCardDetails.js";
import { CommentContext } from "../Context/CommentContext.js";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import SearchBar from "../components/SearchBar.js";
import Footer from "./Footer.js";

const Dashboard = props => {
  const { comments, addToFavComments } = useContext(CommentContext);
  const { favComments, removeFromFavComments } = useContext(FavCommentContext);
  return (
    <>
      <NavBar />
      <Graph comments={comments} />
      <SearchBar comments={comments} />
      <Footer />
    </>
  );
};

export default Dashboard;
