import React, { useState } from "react";
import Logo from "../components/Logo.js";
import Menu from "../components/Menu.js";

import { Icon } from "antd";

const NavBar = () => {
  const [menuState, setMenuState] = useState({
    drawer: false
  });

  return (
    <>
      <Logo />
      <Icon type="menu" />
      <Menu setMenuState={setMenuState} menuState={menuState} />
    </>
  );
};

export default NavBar;
