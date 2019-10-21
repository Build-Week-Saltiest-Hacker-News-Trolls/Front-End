import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UMBButton } from "../theme/Styled.js";

import "../scss/Menu.scss";

import { Drawer } from "antd";

const Menu = props => {
  const closeDrawer = () => {
    props.setMenuState({
      drawer: !props.menuState.drawer
    });
  };

  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        visible={props.menuState.drawer}
        onClose={closeDrawer}
        width="40%"
      >
        <div className="menu">
          <NavLink to="/">Marketing Page</NavLink>
          <NavLink to="/about">About the Team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <UMBButton style={{ marginTop: "30px" }}>Sign Out</UMBButton>
      </Drawer>
    </>
  );
};

export default Menu;
