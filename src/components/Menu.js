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

  // const openFavDrawer = () => {
  //   props.setFavoritesDrawerState({
  //     drawer: !props.favoritesDrawerState.drawer
  //   });
  // };

  // const favoritesClickHandler = () => {
  //   closeDrawer();
  //   openFavDrawer();
  // };

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
          <NavLink to="https://build-week-saltiest-hacker-news-trolls.github.io/Marketing-Page/index.html">Marketing Page</NavLink>
          <NavLink to="https://build-week-saltiest-hacker-news-trolls.github.io/Marketing-Page/about.html">About the Team</NavLink>
          <NavLink to="/edit">
            <span>Edit User Info</span>
          </NavLink>
        </div>
        <Link to="/">
          <UMBButton style={{ marginTop: "30px" }}>Sign Out</UMBButton>
        </Link>
        {/* <div className="favoriteDiv" onClick={favoritesClickHandler}>
          <h5>Favorites </h5>
          <Icon type="heart" theme="filled" />
        </div> */}
      </Drawer>
    </>
  );
};

export default Menu;
