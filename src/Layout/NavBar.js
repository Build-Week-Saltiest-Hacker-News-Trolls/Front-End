import React, { useState, useContext } from "react";
import Logo from "../components/Logo.js";
import Menu from "../components/Menu.js";
import FavoritesDrawer from "../components/FavoritesDrawer.js";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

import "../scss/NavBar.scss";

import { Icon, Avatar, Popover } from "antd";

const NavBar = props => {
  const [menuState, setMenuState] = useState({
    drawer: false
  });
  const [favoriteDrawerState, setFavoriteDrawerState] = useState({
    drawer: false
  });

  const { user } = useContext(UserContext);

  console.log("User from NavBar.sj ", user);

  const openDrawer = () => {
    setMenuState({ drawer: !menuState.drawer });
  };

  const showFavorites = () => {
    setFavoriteDrawerState({ drawer: !favoriteDrawerState.drawer });
  };

  return (
    <div className="navbarContainer">
      <div id="Navbar">
        <Link to="/dashboard">
          <Logo />
        </Link>
        <div>
          <Avatar style={{ backgroundColor: "orange", marginRight: "25px" }}>
            <div onClick={showFavorites}>
              {user.display_name.charAt(0).toUpperCase()}
            </div>
          </Avatar>
          <Icon type="menu" onClick={openDrawer} />
          {/* Drawer Menu */}
        </div>
        <Menu
          props={props.props}
          setMenuState={setMenuState}
          menuState={menuState}
        />
        <FavoritesDrawer
          favoriteDrawerState={favoriteDrawerState}
          setFavoriteDrawerState={setFavoriteDrawerState}
        />
      </div>
    </div>
  );
};

export default NavBar;
