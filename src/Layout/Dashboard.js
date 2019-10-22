import React, { useContext } from "react";
import Feed from "../components/Feed.js";
import NavBar from "./NavBar.js";

const Dashboard = props => {
  return (
    <>
      <NavBar />
      <Feed />
    </>
  );
};

export default Dashboard;
