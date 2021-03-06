import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { UMBButton } from "../theme/Styled.js";

import "../scss/Menu.scss";

import { Drawer, Icon } from "antd";

const Menu = props => {
  const closeDrawer = () => {
    props.setMenuState({
      drawer: !props.menuState.drawer
    });
  };

  // console.log("props from menu", props);

  const signOut = () => {
    localStorage.removeItem("token");
    props.props.history.push("/");
  };

  return (
    <>
      <Drawer
        placement="right"
        closable={false}
        visible={props.menuState.drawer}
        onClose={closeDrawer}
        width="50%"
      >
        <div className="menu">
          <a href="https://relaxed-thompson-079af1.netlify.com/">
            Marketing Page
          </a>
          <a href="https://relaxed-thompson-079af1.netlify.com/about.html">
            About the Team
          </a>
          <NavLink to="/edit">
            <span>Edit User Info</span>
          </NavLink>
        </div>
        <Link to="/">
          <UMBButton onClick={signOut} style={{ marginTop: "30px" }}>
            Sign Out
          </UMBButton>
        </Link>
      </Drawer>
    </>
  );
};

export default Menu;
