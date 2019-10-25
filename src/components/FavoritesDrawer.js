import React, { useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UMBButton } from "../theme/Styled.js";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import "../scss/Menu.scss";

import { Drawer, Icon } from "antd";

const Menu = props => {
  const { favComments, removeFromFavComments } = useContext(FavCommentContext);

  const closeDrawer = () => {
    props.setFavoritesDrawerState({
      drawer: !props.favoritesDrawerState.drawer
    });
  };

  return (
    <>
      <Drawer
        placement="bottom"
        closable={false}
        visible={props.favoritesDrawerState.drawer}
        onClose={closeDrawer}
        width="25%"
      >
        <div className="menu">{}</div>
      </Drawer>
    </>
  );
};

export default Menu;
