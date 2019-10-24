import React, { useState, useEffect } from "react";

import { Statistic, Icon, Progress, Row, Col } from "antd";

const Graph = ({ comments }) => {
  const [currentMood, setCurrentMood] = useState({
    positive: 0,
    negative: 0
  });

  useEffect(() => {
    let mood = {
      positive: 0,
      negative: 0
    };
    let positive = comments.map(comment => {
      return (mood.positive += comment.positive);
    });
    let negative = comments.map(comment => {
      return (mood.negative += comment.negative);
    });

    const positiveAggregate = mood.positive / comments.length;
    const negativeAggregate = mood.negative / comments.length;
    console.log(positiveAggregate, negativeAggregate);
    setCurrentMood({
      positive: positiveAggregate * 100,
      negative: negativeAggregate * -100
    });
  }, [comments]);

  return (
    <Row style={{ marginTop: "20px" }}>
      <Row gutter={[48, 48]}>
        <Col span={12} align="middle">
          <Statistic
            title="Total Comments"
            value={comments.length}
            prefix={<Icon type="unordered-list" />}
          />
        </Col>
        <Col span={12} align="middle">
          <Statistic
            title="Overall Mood"
            value={
              currentMood.positive > currentMood.negative
                ? "Positive"
                : "Negative"
            }
            prefix={<Icon type="fire" />}
          />
        </Col>
        <Col span={12} align="middle">
          <div>
            <p>Positive</p>
            <Progress
              percent={Math.floor(currentMood.positive)}
              type="dashboard"
              status="active"
              strokeColor="green"
            />
          </div>
        </Col>
        <Col span={12} align="middle">
          <div>
            <p>Salty</p>
            <Progress
              percent={Math.floor(currentMood.negative)}
              type="dashboard"
              status="active"
              strokeColor="red"
            />
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default Graph;
