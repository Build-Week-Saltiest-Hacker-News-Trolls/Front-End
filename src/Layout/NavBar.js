import React, { useState, useContext } from "react";
import Logo from "../components/Logo.js";
import Menu from "../components/Menu.js";
import FavoritesDrawer from "../components/FavoritesDrawer.js";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

import "../scss/NavBar.scss";

import { Icon, Avatar, Popover } from "antd";

const NavBar = () => {
  const [menuState, setMenuState] = useState({
    drawer: false
  });
  const [favoritesDrawerState, setFavoritesDrawerState] = useState({
    drawer: false
  });

  const { user } = useContext(UserContext);

  const openDrawer = () => {
    setMenuState({ drawer: !menuState.drawer });
  };

  return (
    <div className="navbarContainer">
      <div id="Navbar">
        <Link to="/dashboard">
          <Logo />
        </Link>
        <div>
          <Popover
            content={
              <p>
                User account will <br /> live here eventually
              </p>
            }
            title={user.username}
          >
            <Avatar style={{ backgroundColor: "orange", marginRight: "25px" }}>
              {user.username.charAt(0).toUpperCase()}
            </Avatar>
          </Popover>
          <Icon type="menu" onClick={openDrawer} />
          {/* Drawer Menu */}
        </div>
        <Menu
          setMenuState={setMenuState}
          menuState={menuState}
          favoritesDrawerState={favoritesDrawerState}
          setFavoritesDrawerState={setFavoritesDrawerState}
        />
        <FavoritesDrawer
          favoritesDrawerState={favoritesDrawerState}
          setFavoritesDrawerState={setFavoritesDrawerState}
        />
      </div>
    </div>
  );
};

export default NavBar;
