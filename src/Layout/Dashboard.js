import React, { useContext } from "react";
import Feed from "../components/Feed.js";
import NavBar from "./NavBar.js";
import SearchBar from "../components/SearchBar.js";

const Dashboard = props => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Feed />
    </>
  );
};

export default Dashboard;
