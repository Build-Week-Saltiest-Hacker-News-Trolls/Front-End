import React, { useContext } from "react";

import { CommentContext } from "../Context/CommentContext.js";
import { FavCommentContext } from "../Context/FavCommentContext.js";

const Dashboard = props => {
  const { comments, addToFavComments } = useContext(CommentContext);
  const { favComments, removeFromFavComments } = useContext(FavCommentContext);
  return <div>testing123....is this thing on?</div>;
};

export default Dashboard;
