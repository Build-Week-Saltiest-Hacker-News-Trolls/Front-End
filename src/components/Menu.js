import React from "react";
import { NavLink } from "react-router-dom";
import { UMBButton } from "../theme/Styled.js";

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
        closable={true}
        visible={props.menuState.drawer}
        onClose={closeDrawer}
        height="60%"
      >
        <NavLink to="/">Marketing Page</NavLink>
        <NavLink to="/about">About the Team</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <UMBButton style={{ position: "absolute", bottom: 10, right: 10 }}>
          Sign Out
        </UMBButton>
      </Drawer>
    </>
  );
};

export default Menu;
