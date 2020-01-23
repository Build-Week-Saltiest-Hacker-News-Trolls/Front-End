import React from "react";
import "../scss/Loading.scss";
import Logo from "../components/Logo.js";

import { Spin, Icon } from "antd";

const Loading = () => {
  const loader = <Icon type="loading" style={{ fontSize: 24 }} spin />;

  return (
    <div id="Loading">
      <Logo />
      <Spin indicator={loader} />
    </div>
  );
};

export default Loading;
