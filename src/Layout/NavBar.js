import React, { useState } from "react";
import Logo from "../components/Logo.js";
import Menu from "../components/Menu.js";

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
    <nav id="Navbar">
      <Logo />
      <Icon type="menu" onClick={openDrawer} />

      {/* Drawer Menu */}
      <Menu setMenuState={setMenuState} menuState={menuState} />
    </nav>
  );
};

export default NavBar;
