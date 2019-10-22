import React, { useState, useEffect } from "react";
import Logo from "../components/Logo.js";
import Menu from "../components/Menu.js";
import { Link } from "react-router-dom";

import "../scss/NavBar.scss";

import { Icon } from "antd";

const NavBar = () => {
  const [menuState, setMenuState] = useState({
    drawer: false
  });

  const openDrawer = () => {
    setMenuState({ drawer: !menuState.drawer });
  };

  return (
    <div className="navbarContainer">
      <div id="Navbar">
        <Link to="/dashboard">
          <Logo />
        </Link>
        <Icon type="menu" onClick={openDrawer} />
        {/* Drawer Menu */}
        <Menu setMenuState={setMenuState} menuState={menuState} />
      </div>
    </div>
  );
};

export default NavBar;
