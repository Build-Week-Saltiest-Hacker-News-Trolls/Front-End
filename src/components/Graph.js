import React, { useState, useEffect } from "react";

<<<<<<< HEAD
import { Statistic, Icon, Progress, Row, Col } from "antd";
=======
import { Statistic, Icon, Progress, Row, Col, Select } from "antd";

const { Option } = Select;
>>>>>>> db31289c11cf88a69d446b1a1f0df2be022acf15

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
            prefix={<Icon type="number" />}
          />
        </Col>
        <Col span={12} align="middle">
          <Statistic
            title="Overall Mood"
            value={
              currentMood.positive * currentMood.negative > 0
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
            <p>Negative</p>
            <Progress
              percent={Math.floor(currentMood.negative)}
              type="dashboard"
              status="active"
              strokeColor="red"
            />
          </div>
<<<<<<< HEAD
=======
          <Select defaultValue="0">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
>>>>>>> db31289c11cf88a69d446b1a1f0df2be022acf15
        </Col>
      </Row>
    </Row>
  );
};

export default Graph;
