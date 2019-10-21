import React, { useContext } from "react";

import { CommentContext } from "../Context/CommentContext.js";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import Feed from "../components/Feed.js";

const Dashboard = props => {
  const { comments, addToFavComments } = useContext(CommentContext);
  const { favComments, removeFromFavComments } = useContext(FavCommentContext);

  return <Feed />;
};

export default Dashboard;
