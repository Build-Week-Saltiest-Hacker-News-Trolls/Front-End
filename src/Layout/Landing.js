import React, { useState, useEffect } from "react";
import Logo from "../components/Logo.js";
import { Drawer, Row, Col } from "antd";
import { UMBButton } from "../theme/Styled.js";
import "../scss/Landing.scss";

import SignIn from "../SignInLayout/SignIn.js";
import SignUp from "../SignInLayout/SignUp.js";

const Landing = () => {
  const [landingState, setLandingState] = useState({
    drawer: false,
    view: ""
  });

  const toggleDrawer = e => {
    setLandingState({
      drawer: !landingState.drawer,
      view: e.target.name
    });
  };

  const closeDrawer = () => {
    setLandingState({
      drawer: !landingState.drawer,
      view: ""
    });
  };

  return (
    <div id="Landing">
      <Row>
        <Logo />
      </Row>
      <Row className="button-group">
        <UMBButton name="signIn" onClick={e => toggleDrawer(e)}>
          Sign in
        </UMBButton>
        <UMBButton name="signUp" onClick={e => toggleDrawer(e)}>
          Sign up
        </UMBButton>
      </Row>
      <Drawer
        placement="bottom"
        closable={true}
        visible={landingState.drawer}
        onClose={closeDrawer}
        height="60%"
      >
        {landingState.view === "signIn" ? <SignIn /> : <SignUp />}
      </Drawer>
    </div>
  );
};

export default Landing;
