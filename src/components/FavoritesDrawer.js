import React, { useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { UMBButton } from "../theme/Styled.js";
import { FavCommentContext } from "../Context/FavCommentContext.js";
import FavCardComponent from "../components/FavCardComponent";
import "../scss/Menu.scss";

import { Drawer, Icon, Row, Col } from "antd";

const Menu = props => {
  const { favComments, removeFromFavComments } = useContext(FavCommentContext);

  const closeDrawer = () => {
    props.setFavoriteDrawerState({
      drawer: !props.favoriteDrawerState.drawer
    });
  };

  return (
    <>
      <Drawer
        placement="bottom"
        closable={true}
        visible={props.favoriteDrawerState.drawer}
        onClose={closeDrawer}
        height="75vh"
      >
        <Row>
          <Col>
            <h5>Your Favorites:</h5>
          </Col>
        </Row>
        <Row style={{ overflowY: "scroll", height: "68vh" }}>
          {favComments.length ? (
            favComments.map(item => (
              <FavCardComponent key={item.id} commentItem={item} />
            ))
          ) : (
            <p>Go add some favorites!</p>
          )}
        </Row>
      </Drawer>
    </>
  );
};

export default Menu;
