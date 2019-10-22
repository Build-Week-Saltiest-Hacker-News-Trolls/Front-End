import React, { useEffect, useState } from "react";
import FeedCardComponent from "./FeedCardComponent.js";

const Feed = () => {
  const [fakeData, setFakeData] = useState([
    {
      id: 0,
      username: "Username",
      commentDate: "01/01/2020",
      rating: "10/10",
      ratingType: "Rating",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolores itaque reprehenderit sapiente voluptatem ratione debitis iure, sed quae nostrum officiis dicta voluptates hic ea?"
    }
  ]);

  console.log("fakeData from feed.js", fakeData);

  return (
    <>
      {/* Map over incoming comments */}

      {fakeData.map(item => (
        <FeedCardComponent key={item.id} user={item} />
      ))}
    </>
  );
};

export default Feed;
