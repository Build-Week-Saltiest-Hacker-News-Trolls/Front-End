import React, { useEffect, useState, useContext } from "react";
import FeedCardComponent from "./FeedCardComponent.js";
import { CommentContext } from "../Context/CommentContext.js";
import { FavCommentContext } from "../Context/FavCommentContext.js";

const Feed = () => {
  const { comments, addToFavComments } = useContext(CommentContext);
  const { favComments, removeFromFavComments } = useContext(FavCommentContext);

  console.log("fakeData from feed.js", comments);

  return (
    <>
      {/* Map over incoming comments */}

      {comments.map(item => (
        <FeedCardComponent key={item.id} user={item} />
      ))}
    </>
  );
};

export default Feed;
