import React from "react";

import { Statistic, Icon, Progress } from "antd";

const Graph = props => {
  return (
    <div>
      <Statistic
        title="Feedback"
        value={props.comments.length}
        prefix={<Icon type="number" />}
      />
      <Statistic
        title="Latest"
        value={props.date}
        prefix={<Icon type="calendar" />}
      />
      <Progress percent={props.saltiness} status="active" />
      <Progress percent={props.positive} status="active" />
    </div>
  );
};

export default Graph;
